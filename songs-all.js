/* songs-all.js — prior overlays, plus day 028 */
(function () {
  function apply028(root) {
    if (!root) return;
    var d = root["028"] || root[28] || {};
    d.heLyricsEn = "No Hebrew lyrics link on this day.";
    d.hiLyricsEn = "No Hindi lyrics link on this day.";
    root["028"] = d;
    root[28] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply028);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@cb75c14f41a8ad2a25ea7b78962723f644d4dc8f/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
