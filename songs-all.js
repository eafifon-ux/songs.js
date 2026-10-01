/* songs-all.js — prior overlays, plus day 015 */
(function () {
  function apply015(root) {
    if (!root) return;
    var d = root["015"] || root[15] || {};
    d.heLyricsEn = "No Hebrew lyrics page on the stored link.";
    d.hiLyricsEn = "If you are with me, let this heart be mended. Every sorrow would slip away.";
    d.hiLyricsHi = "अगर तुम साथ हो";
    root["015"] = d;
    root[15] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply015);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@468d1b9009a5076fd6a5779dea77b6e397ca7c70/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
