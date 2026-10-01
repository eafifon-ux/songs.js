/* songs-all.js — prior overlays, plus day 026 */
(function () {
  function apply026(root) {
    if (!root) return;
    var d = root["026"] || root[26] || {};
    d.heLyricsEn = "No Hebrew lyrics link on this day.";
    d.hiLyricsEn = "No Hindi lyrics link on this day.";
    root["026"] = d;
    root[26] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply026);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@81341e0829ac881de1497ac0fe570ec374550ec9/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
