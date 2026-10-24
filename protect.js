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
    if (k === "printscreen" || (e.metaKey && e.shiftKey)) { wipeClipboard(); hide(2500); }
  }, true);
  document.addEventListener("keyup", function (e) {
    var k = (e.key || "").toLowerCase();
    if (k === "printscreen") { wipeClipboard(); hide(2500); }
    if (k === "meta" || k === "os") wipeClipboard();
  }, true);

  window.addEventListener("beforeprint", function () { hide(); });
  window.addEventListener("afterprint", function () { show(); });

  /* videos: no download, no picture-in-picture, no casting */
  function lock(v) {
    v.setAttribute("controlsList", "nodownload noremoteplayback noplaybackrate");
    v.setAttribute("disablePictureInPicture", "");
    v.setAttribute("disableRemotePlayback", "");
    v.setAttribute("oncontextmenu", "return false");
  }
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
