// Serves the site's files, adding "Range" support for videos so visitors can
// skip forward/back and drag the progress bar in the intro video.
// Every other file goes straight to Cloudflare's static assets (see wrangler.jsonc).
// Visitor log: pages send small events to /api/e (visit, print, save, right-click ...).
// Each one is stored in KV (no raw IP kept) and, for resume visits and print/save attempts,
// pushed to Maria's phone through ntfy. /api/stats?k=<STATS_KEY> shows the report.
const EVENT_TYPES = new Set(["visit", "print", "save", "rclick", "copy", "drag", "printscreen", "devtools"]);
const NOISY = /bot|crawl|spider|preview|facebookexternalhit|whatsapp|slurp|headless|lighthouse|monitor/i;
const TTL = 60 * 60 * 24 * 180;
const PUSH_TYPES = { print: "Print attempt", save: "Save attempt", printscreen: "PrintScreen pressed" };

// Blocked visitors (Maria, 2026-11-25): nobody in the Philippines may open any page (home, portfolio,
// booking, every resume, now and future), except Maria's own browsers. Her browsers carry the owner
// cookie, set once by opening /me?k=<owner key>. Only the SHA-256 of that key is kept here (the repo is
// public); the key itself is in her private notes. The visitor ids are the PH recruiter group from 18 Nov
// (hashed IP + browser, as shown in the visitor log), blocked even if they come back from another country.
const BLOCKED_COUNTRIES = new Set(["PH"]);
const BLOCKED_VISITORS = new Set(["3c7ad93bc2", "8e78d9c780", "95bdcb8bd5", "f9121a4bb1", "9005d0b1d6"]);
const OWNER_HASH = "df08bcb1ecb152accfbd892e149e72d74700ce074e51e24654af78c37fddc524";
const OWNER_COOKIE = "__mo";
const cookieValue = (request, name) => {
  const m = new RegExp("(?:^|;\\s*)" + name + "=([^;]*)").exec(request.headers.get("cookie") || "");
  return m ? m[1] : "";
};
const isOwnerKey = async (key) => !!key && (await sha(key)) === OWNER_HASH;
const BLOCKED_PAGE = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex, nofollow"><title>Not available</title></head><body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#F4FCFC;font-family:system-ui,sans-serif;color:#173042;text-align:center;padding:24px"><div><h1 style="color:#0B6E7F;font-size:1.5rem;margin:0 0 10px">This page is not available</h1><p style="margin:0;color:#5B7482">Thank you for stopping by.</p></div></body></html>`;

const sha = async (text) => {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
};
const countryName = (cc) => { try { return new Intl.DisplayNames(["en"], { type: "region" }).of(cc) || cc; } catch { return cc; } };
const pageLabel = (p) => { const m = /^\/cv\/([^/]+)\//.exec(p); return m ? "resume " + m[1] : p; };

async function recordEvent(request, env, ctx) {
  if (request.method !== "POST") return new Response(null, { status: 405 });
  const ua = request.headers.get("user-agent") || "";
  if (NOISY.test(ua)) return new Response(null, { status: 204 });
  let b;
  try { b = await request.json(); } catch { return new Response(null, { status: 400 }); }
  const t = String(b.t || "");
  const path = String(b.p || "").slice(0, 120);
  if (!EVENT_TYPES.has(t) || !path.startsWith("/")) return new Response(null, { status: 400 });

  const cf = request.cf || {};
  const ip = request.headers.get("cf-connecting-ip") || "";
  const vid = (await sha(ip + "|" + ua + "|" + (env.STATS_KEY || ""))).slice(0, 10);
  let ref = "";
  try { ref = new URL(request.headers.get("referer") || "").hostname; } catch {}
  const own = new URL(request.url).hostname;
  if (ref === own) ref = "";
  const ev = {
    ts: Date.now(), t, p: path, c: cf.country || "?", city: cf.city || "", reg: cf.region || "",
    dev: /mobile|android|iphone|ipad/i.test(ua) ? "mobile" : "desktop", ref, v: vid,
  };
  // newest first when listed: the key counts down from a big number
  const key = "e:" + String(9999999999999 - ev.ts).padStart(13, "0") + ":" + vid + t + Math.random().toString(36).slice(2, 6);
  await env.EVENTS.put(key, "1", { metadata: ev, expirationTtl: TTL });

  const title = t === "visit" ? (path.startsWith("/cv/") ? "Resume visit" : null) : PUSH_TYPES[t];
  if (title && env.NTFY_TOPIC) {
    const dedupe = "n:" + vid + t + path;
    if (!(await env.EVENTS.get(dedupe))) {
      await env.EVENTS.put(dedupe, "1", { expirationTtl: 1800 });
      const where = [ev.city, countryName(ev.c)].filter(Boolean).join(", ");
      const msg = pageLabel(path) + "\n" + where + " - " + ev.dev + (ref ? " - from " + ref : "");
      ctx.waitUntil(fetch("https://ntfy.sh/" + encodeURIComponent(env.NTFY_TOPIC), {
        method: "POST", headers: { Title: title, Tags: t === "visit" ? "eyes" : "warning" }, body: msg,
      }).catch(() => {}));
    }
  }
  return new Response(null, { status: 204 });
}

async function statsPage(request, env) {
  const url = new URL(request.url);
  if (!env.STATS_KEY || url.searchParams.get("k") !== env.STATS_KEY) return new Response("Not found", { status: 404 });
  const events = [];
  let cursor;
  for (let i = 0; i < 5; i++) {
    const r = await env.EVENTS.list({ prefix: "e:", limit: 1000, cursor });
    r.keys.forEach((k) => k.metadata && events.push(k.metadata));
    if (r.list_complete) break;
    cursor = r.cursor;
  }
  const data = JSON.stringify(events).replace(/</g, "\\u003c");
  return new Response(REPORT_HTML.replace("__DATA__", data), {
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store", "x-robots-tag": "noindex" },
  });
}

const REPORT_HTML = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Visitor report</title>
<style>body{font:15px/1.5 system-ui,sans-serif;margin:0;padding:20px;background:#f4fcfc;color:#173042}h1{margin:0 0 4px}h2{margin:28px 0 8px;font-size:17px}table{border-collapse:collapse;width:100%;background:#fff;border-radius:12px;overflow:hidden}th,td{padding:8px 12px;border-bottom:1px solid #e1eeee;text-align:left}th{background:#e4f6f6;font-size:12px;letter-spacing:.06em;text-transform:uppercase}.w{max-width:980px;margin:0 auto}.warn{color:#b3361b;font-weight:600}.tabs button{margin:0 6px 6px 0;padding:6px 14px;border:1px solid #bcdede;background:#fff;border-radius:999px;cursor:pointer}.tabs .on{background:#0b6e7f;color:#fff}</style></head><body><div class="w">
<h1>Visitor report</h1><div id="sub" style="color:#5b7482"></div>
<div class="tabs" id="tabs"></div>
<h2>By page</h2><div id="pages"></div><h2>By country</h2><div id="countries"></div><h2>Latest activity</h2><div id="latest"></div></div>
<script>
var E=__DATA__,range="all",names=new Intl.DisplayNames(["en"],{type:"region"});
var cn=function(c){try{return names.of(c)}catch(e){return c}};
var label=function(p){var m=/^\\/cv\\/([^/]+)\\//.exec(p);return m?"resume: "+m[1]:p};
function fmt(ts){return new Date(ts).toLocaleString([], {month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}
function table(h,rows){return "<table><tr>"+h.map(function(x){return "<th>"+x+"</th>"}).join("")+"</tr>"+rows.map(function(r){return "<tr>"+r.map(function(x){return "<td>"+x+"</td>"}).join("")+"</tr>"}).join("")+"</table>"}
function draw(){
  var cut=range==="all"?0:Date.now()-range*864e5, L=E.filter(function(e){return e.ts>=cut});
  document.getElementById("sub").textContent=L.length+" events, "+new Set(L.map(function(e){return e.v})).size+" different visitors (no IPs stored)";
  var pg={},ct={};
  L.forEach(function(e){var a=pg[e.p]=pg[e.p]||{v:new Set(),n:0,pr:0,bl:0};
    if(e.t==="visit"){a.n++;a.v.add(e.v);var c=ct[e.c]=ct[e.c]||{v:new Set(),n:0};c.n++;c.v.add(e.v)}
    else if(e.t==="print"||e.t==="save"||e.t==="printscreen")a.pr++;else a.bl++});
  document.getElementById("pages").innerHTML=table(["Page","Visits","Visitors","Print / save","Other blocked"],Object.keys(pg).sort(function(a,b){return pg[b].n-pg[a].n}).map(function(p){var a=pg[p];return [label(p),a.n,a.v.size,a.pr?'<span class="warn">'+a.pr+"</span>":0,a.bl]}));
  document.getElementById("countries").innerHTML=table(["Country","Visits","Visitors"],Object.keys(ct).sort(function(a,b){return ct[b].n-ct[a].n}).map(function(c){return [cn(c),ct[c].n,ct[c].v.size]}));
  document.getElementById("latest").innerHTML=table(["When","What","Page","Where","Device"],L.slice(0,100).map(function(e){return [fmt(e.ts),e.t==="visit"?"visit":'<span class="warn">'+e.t+"</span>",label(e.p),[e.city,cn(e.c)].filter(Boolean).join(", ")+(e.ref?" (from "+e.ref+")":""),e.dev]}));
}
var T=document.getElementById("tabs");[["Today",1],["7 days",7],["30 days",30],["All",0]].forEach(function(x){var b=document.createElement("button");b.textContent=x[0];b.onclick=function(){range=x[1]||"all";[].forEach.call(T.children,function(c){c.className=""});b.className="on";draw()};if(!x[1])b.className="on";T.appendChild(b)});
draw();
</script></body></html>`;

// Returns a "not available" page for blocked visitors, or null for everyone else.
// Page loads (not images/scripts) are logged as "blocked" so they show in the visitor report.
async function blockedResponse(request, env, ctx, pathname) {
  const cf = request.cf || {};
  const ua = request.headers.get("user-agent") || "";
  const ip = request.headers.get("cf-connecting-ip") || "";
  const vid = (await sha(ip + "|" + ua + "|" + (env.STATS_KEY || ""))).slice(0, 10);
  if (!BLOCKED_VISITORS.has(vid) && !BLOCKED_COUNTRIES.has(cf.country)) return null;
  if (await isOwnerKey(cookieValue(request, OWNER_COOKIE))) return null;
  const isPage = (request.headers.get("accept") || "").includes("text/html");
  if (isPage && env.EVENTS) {
    const ev = {
      ts: Date.now(), t: "blocked", p: pathname.slice(0, 120), c: cf.country || "?", city: cf.city || "", reg: cf.region || "",
      dev: /mobile|android|iphone|ipad/i.test(ua) ? "mobile" : "desktop", ref: "", v: vid,
    };
    const key = "e:" + String(9999999999999 - ev.ts).padStart(13, "0") + ":" + vid + "blocked" + Math.random().toString(36).slice(2, 6);
    ctx.waitUntil(env.EVENTS.put(key, "1", { metadata: ev, expirationTtl: TTL }));
  }
  if (!isPage) return new Response(null, { status: 403 });
  return new Response(BLOCKED_PAGE, {
    status: 403,
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store", "X-Robots-Tag": "noindex, nofollow" },
  });
}

export default {
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url);
    if (pathname === "/api/stats") return statsPage(request, env);
    // Maria's unlock link: marks this browser as hers (about 13 months), then opens the home page
    // with ?me=1 so protect.js also stops logging her visits
    if (pathname === "/me") {
      const key = new URL(request.url).searchParams.get("k") || "";
      if (await isOwnerKey(key)) {
        return new Response(null, {
          status: 302,
          headers: {
            Location: "/?me=1",
            "Set-Cookie": `${OWNER_COOKIE}=${key}; Max-Age=34560000; Path=/; Secure; HttpOnly; SameSite=Lax`,
            "cache-control": "no-store",
          },
        });
      }
    }
    const blocked = await blockedResponse(request, env, ctx, pathname);
    if (blocked) return blocked;
    if (pathname === "/api/e") return recordEvent(request, env, ctx);
    // Home page: hidden from Google, but keep link previews (_headers can't change the header on "/")
    if (pathname === "/") {
      const page = await env.ASSETS.fetch(request);
      const h = new Headers(page.headers);
      h.set("X-Robots-Tag", "noindex, nofollow");
      return new Response(page.body, { status: page.status, statusText: page.statusText, headers: h });
    }
    // Every other file (pages, images, scripts) goes straight to the static assets;
    // only the videos need the Range handling below
    if (!pathname.endsWith(".mp4")) return env.ASSETS.fetch(request);
    const range = request.headers.get("Range");
    // Ask for the whole file; the static assets service ignores Range headers
    const asset = await env.ASSETS.fetch(new Request(request.url, { method: "GET" }));

    const headers = new Headers(asset.headers);
    headers.set("Accept-Ranges", "bytes");

    if (asset.status !== 200) return new Response(asset.body, { status: asset.status, headers });
    if (request.method === "HEAD") return new Response(null, { status: 200, headers });

    const match = range && /^bytes=(\d*)-(\d*)$/.exec(range.trim());
    if (!match || (match[1] === "" && match[2] === "")) return new Response(asset.body, { status: 200, headers });

    const body = await asset.arrayBuffer();
    const size = body.byteLength;
    let start, end;
    if (match[1] === "") {
      // "bytes=-500" means the last 500 bytes
      start = Math.max(0, size - Number(match[2]));
      end = size - 1;
    } else {
      start = Number(match[1]);
      end = match[2] === "" ? size - 1 : Math.min(Number(match[2]), size - 1);
    }

    if (start >= size || start > end) {
      headers.set("Content-Range", `bytes */${size}`);
      headers.delete("Content-Length");
      return new Response(null, { status: 416, headers });
    }

    headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
    headers.set("Content-Length", String(end - start + 1));
    return new Response(body.slice(start, end + 1), { status: 206, headers });
  },
};
