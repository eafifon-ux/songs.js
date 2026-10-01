/* songs-all.js — prior overlays, plus day 031 */
(function () {
  function apply031(root) {
    if (!root) return;
    var d = root["031"] || root[31] || {};
    d.heLyricsEn = "No Hebrew lyrics link on this day.";
    d.hiLyricsEn = "No Hindi lyrics link on this day.";
    root["031"] = d;
    root[31] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply031);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@da1876e6163501f6566908350d7d61d6e23a005f/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
