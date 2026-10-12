// Serves the site's files, adding "Range" support for videos so visitors can
// skip forward/back and drag the progress bar in the intro video.
// Every other file goes straight to Cloudflare's static assets (see wrangler.jsonc).
export default {
  async fetch(request, env) {
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
