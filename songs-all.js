/* songs-all.js — prior overlays, plus day 029 */
(function () {
  function apply029(root) {
    if (!root) return;
    var d = root["029"] || root[29] || {};
    d.heLyricsEn = "No Hebrew lyrics link on this day.";
    d.hiLyricsEn = "No Hindi lyrics link on this day.";
    root["029"] = d;
    root[29] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply029);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@f41cb96518120e84e31e7ec4e6bd874cc658f452/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
