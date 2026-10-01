/* songs-all.js — prior overlays, plus day 030 */
(function () {
  function apply030(root) {
    if (!root) return;
    var d = root["030"] || root[30] || {};
    d.heLyricsEn = "No Hebrew lyrics link on this day.";
    d.hiLyricsEn = "No Hindi lyrics link on this day.";
    root["030"] = d;
    root[30] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply030);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@852e4cfc70b773f0636b4bd028d31acfb65bdd97/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
