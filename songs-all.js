/* songs-all.js — prior overlays, plus day 024 */
(function () {
  function apply024(root) {
    if (!root) return;
    var d = root["024"] || root[24] || {};
    d.heLyricsEn = "No Hebrew lyrics link on this day.";
    d.hiLyricsEn = "No Hindi lyrics link on this day.";
    root["024"] = d;
    root[24] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply024);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@42624ef6f8e2efe11d2cba95b4468db95c67aa46/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
