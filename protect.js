/* Copy / save / print deterrents for Maria's public pages.
   Browsers cannot truly stop screenshots, phone cameras or someone reading the page source,
   so this makes casual copying hard: no right-click, no drag-save, no text/image copy,
   no print / save-as-PDF, no download buttons on videos, and the page goes dark on PrintScreen. */
(function () {
  "use strict";
  var css = [
    "html,body{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}",
    "input,textarea,select,[contenteditable]{-webkit-user-select:text;user-select:text}",
    "img,video,canvas,svg{-webkit-user-drag:none;user-drag:none}",
    "img,video{-webkit-touch-callout:none}",
    "#__pcover{position:fixed;inset:0;z-index:2147483647;background:#000;display:none}",
    "html.__pc #__pcover{display:block}",
    "@media print{html,body{display:none!important;visibility:hidden!important}}"
  ].join("\n");
  var st = document.createElement("style");
  st.textContent = css;
  (document.head || document.documentElement).appendChild(st);

  var cover = document.createElement("div");
  cover.id = "__pcover";
  var root = document.documentElement;
  function mount() { if (document.body && !cover.parentNode) document.body.appendChild(cover); }
  if (document.body) mount(); else document.addEventListener("DOMContentLoaded", mount);

  /* visitor log: tells Maria who opened a page (country only, no IP stored) and who tried to print/save/copy.
     Opening any page with ?me=1 once marks this browser as hers, so her own visits are not logged. */
  var mine = false;
  try {
    if (/[?&]me=1/.test(location.search)) localStorage.setItem("__me", "1");
    mine = localStorage.getItem("__me") === "1";
  } catch (e) {}
  var local = /^(localhost|127\.|192\.168\.|\[::1\])/.test(location.hostname);
  var logged = {};
  function pagePath() {
    var m = /[?&]job=([\w-]+)/.exec(location.search);
    return location.pathname === "/cv/" && m ? "/cv/" + m[1] + "/" : location.pathname;
  }
  function log(type) {
    if (mine || local || logged[type]) return;
    logged[type] = 1;
    try {
      var body = JSON.stringify({ t: type, p: pagePath() });
      if (navigator.sendBeacon) navigator.sendBeacon("/api/e", new Blob([body], { type: "application/json" }));
      else fetch("/api/e", { method: "POST", body: body, keepalive: true, headers: { "content-type": "application/json" } });
    } catch (e) {}
  }
  log("visit");

  var timer = null;
  function hide(ms) {
    mount();
    root.classList.add("__pc");
    clearTimeout(timer);
    if (ms) timer = setTimeout(function () { root.classList.remove("__pc"); }, ms);
  }
  function show() { clearTimeout(timer); root.classList.remove("__pc"); }
  function wipeClipboard() {
    try { navigator.clipboard && navigator.clipboard.writeText(" "); } catch (e) {}
  }
  function editable(t) {
    return t && t.closest && t.closest("input,textarea,select,[contenteditable]");
  }

  ["contextmenu", "dragstart", "copy", "cut"].forEach(function (ev) {
    document.addEventListener(ev, function (e) {
      if (ev !== "contextmenu" && editable(e.target)) return;
      e.preventDefault();
      log(ev === "contextmenu" ? "rclick" : ev === "dragstart" ? "drag" : "copy");
    }, true);
  });
  document.addEventListener("selectstart", function (e) { if (!editable(e.target)) e.preventDefault(); }, true);

  document.addEventListener("keydown", function (e) {
    var k = (e.key || "").toLowerCase(), mod = e.ctrlKey || e.metaKey;
    var block =
      k === "f12" || k === "printscreen" ||
      (mod && ["s", "p", "u", "a", "c", "x"].indexOf(k) > -1 && !editable(e.target)) ||
      (mod && e.shiftKey && ["i", "j", "c", "s"].indexOf(k) > -1) ||
      (e.metaKey && e.shiftKey && ["3", "4", "5"].indexOf(k) > -1);
    if (!block) return;
    e.preventDefault();
    e.stopPropagation();
    log(k === "printscreen" || (e.metaKey && e.shiftKey && !e.ctrlKey && /[345]/.test(k)) ? "printscreen"
      : mod && k === "p" ? "print" : mod && k === "s" && !e.shiftKey ? "save"
      : k === "f12" || (mod && e.shiftKey) || (mod && k === "u") ? "devtools" : "copy");
    if (k === "printscreen" || (e.metaKey && e.shiftKey)) { wipeClipboard(); hide(2500); }
  }, true);
  document.addEventListener("keyup", function (e) {
    var k = (e.key || "").toLowerCase();
    if (k === "printscreen") { log("printscreen"); wipeClipboard(); hide(2500); }
    if (k === "meta" || k === "os") wipeClipboard();
  }, true);

  window.addEventListener("beforeprint", function () { log("print"); hide(); });
  window.addEventListener("afterprint", function () { show(); });

  /* videos: no download, no picture-in-picture, no casting */
  function lock(v) {
    /* work videos also lose the native fullscreen button, which would hide the watermark */
    v.setAttribute("controlsList", "nodownload noremoteplayback noplaybackrate" + (v.id === "introVideo" ? "" : " nofullscreen"));
    v.setAttribute("disablePictureInPicture", "");
    v.setAttribute("disableRemotePlayback", "");
    v.setAttribute("oncontextmenu", "return false");
    mark(v);
  }
  /* watermark: "Maria Simbajon" centred on every work video (not her own intro video).
     A sibling overlay sized to the video's box, so it works in every card, phone frame and pop-up. */
  var wmCss = document.createElement("style");
  wmCss.textContent =
    ".__wm{position:absolute;z-index:3;display:flex;align-items:center;justify-content:center;pointer-events:none;overflow:hidden;" +
    "font:800 16px/1 'DM Sans','Segoe UI',Arial,sans-serif;letter-spacing:.03em;color:rgba(255,255,255,.8);white-space:nowrap;" +
    "text-shadow:0 1px 4px rgba(0,0,0,.45),0 0 2px rgba(0,0,0,.5)}";
  (document.head || document.documentElement).appendChild(wmCss);
  var ro = window.ResizeObserver ? new ResizeObserver(function (es) { es.forEach(function (e) { place(e.target); }); }) : null;
  function place(v) {
    var w = v.__wm;
    if (!w) return;
    if (!v.isConnected) { w.remove(); return; }
    if (w.parentNode !== v.parentNode || w.previousSibling !== v) v.after(w);
    var vw = v.offsetWidth, vh = v.offsetHeight;
    if (!vw || !vh || v.hidden) { w.style.display = "none"; return; }
    w.style.display = "flex";
    w.style.left = v.offsetLeft + "px";
    w.style.top = v.offsetTop + "px";
    w.style.width = vw + "px";
    w.style.height = vh + "px";
    w.style.fontSize = Math.max(12, Math.min(vw * 0.07, 44)) + "px";
  }
  function mark(v) {
    if (v.__wm || v.id === "introVideo" || !v.parentNode) return;
    var w = document.createElement("div");
    w.className = "__wm";
    w.setAttribute("aria-hidden", "true");
    w.textContent = "© Maria Simbajon";
    v.__wm = w;
    v.after(w);
    place(v);
    if (ro) ro.observe(v);
    ["loadedmetadata", "play"].forEach(function (ev) { v.addEventListener(ev, function () { place(v); }); });
    new MutationObserver(function () { place(v); }).observe(v, { attributes: true, attributeFilter: ["hidden", "style", "class"] });
  }
  function placeAll() { document.querySelectorAll("video").forEach(place); }
  window.addEventListener("resize", placeAll);
  window.addEventListener("load", placeAll);

  function lockAll(r) { (r || document).querySelectorAll("video").forEach(lock); }
  lockAll();
  new MutationObserver(function (ms) {
    ms.forEach(function (m) {
      m.addedNodes.forEach(function (n) {
        if (n.nodeType !== 1) return;
        if (n.tagName === "VIDEO") lock(n); else lockAll(n);
      });
    });
  }).observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener("DOMContentLoaded", function () { lockAll(); });
})();
