/* songs-all.js — prior overlays, plus day 021 */
(function () {
  function apply021(root) {
    if (!root) return;
    var d = root["021"] || root[21] || {};
    d.heLyricsEn = "No Hebrew lyrics link on this day.";
    d.hiLyricsEn = "No Hindi lyrics link on this day.";
    root["021"] = d;
    root[21] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply021);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@d30edbc22cc67cb22be9c0b248485c20e7ce4e6b/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
