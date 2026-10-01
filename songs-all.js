/* songs-all.js — prior overlays, plus day 037 */
(function () {
  function apply037(root) {
    if (!root) return;
    var d = root["037"] || root[37] || {};
    d.heLyricsEn = "Let us sit and talk. I will not keep it in anymore. I miss you.";
    d.hiLyricsEn = "No Hindi lyrics link on this day.";
    root["037"] = d;
    root[37] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply037);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@20113012f00e6e9c9efe38f3f90c8cf3801e8e16/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
