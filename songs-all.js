/* songs-all.js — prior overlays, plus day 011 */
(function () {
  function apply011(root) {
    if (!root) return;
    var d = root["011"] || root[11] || {};
    d.heLyricsEn = "No Hebrew lyrics link on this day.";
    d.hiLyricsEn = "Live every moment fully. This moment may not be there tomorrow.";
    d.hiLyricsHi = "कल हो ना हो";
    root["011"] = d;
    root[11] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply011);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@28e5d1ba51fbde39f445e96b7a296c2c748612f8/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
