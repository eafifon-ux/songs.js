/* songs-all.js — prior overlays, plus day 025 */
(function () {
  function apply025(root) {
    if (!root) return;
    var d = root["025"] || root[25] || {};
    d.heLyricsEn = "No Hebrew lyrics link on this day.";
    d.hiLyricsEn = "No Hindi lyrics link on this day.";
    root["025"] = d;
    root[25] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply025);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@b6be9f30b8ead3053d781806c1b02b883aa63110/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
