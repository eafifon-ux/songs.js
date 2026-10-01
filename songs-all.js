/* songs-all.js — prior overlays, plus day 019 */
(function () {
  function apply019(root) {
    if (!root) return;
    var d = root["019"] || root[19] || {};
    d.heLyricsEn = "No Hebrew lyrics page on the stored link.";
    d.hiLyricsEn = "I am a little traveler, a soldier of my country. I will keep walking forward.";
    d.hiLyricsHi = "नन्हा मुन्ना राही हूँ\nदेश का सिपाही हूँ";
    root["019"] = d;
    root[19] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply019);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@92cd44a2cf02eaafb84462f820b4f3c05310542c/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
