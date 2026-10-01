/* songs-all.js — prior overlays, plus day 022 */
(function () {
  function apply022(root) {
    if (!root) return;
    var d = root["022"] || root[22] || {};
    d.heLyricsEn = "No Hebrew lyrics link on this day.";
    d.hiLyricsEn = "No Hindi lyrics link on this day.";
    root["022"] = d;
    root[22] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply022);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@038a70719c8cc1e6f89f83e3dce65b42d7cbf1b8/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
