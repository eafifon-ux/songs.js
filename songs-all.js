/* songs-all.js — prior overlays, plus day 027 */
(function () {
  function apply027(root) {
    if (!root) return;
    var d = root["027"] || root[27] || {};
    d.heLyricsEn = "No Hebrew lyrics link on this day.";
    d.hiLyricsEn = "No Hindi lyrics link on this day.";
    root["027"] = d;
    root[27] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply027);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@d316f16ea322f77cbbfd172f66b84653a77cff1f/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
