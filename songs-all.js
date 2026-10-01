/* songs-all.js — prior overlays, plus day 023 */
(function () {
  function apply023(root) {
    if (!root) return;
    var d = root["023"] || root[23] || {};
    d.heLyricsEn = "No Hebrew lyrics link on this day.";
    d.hiLyricsEn = "No Hindi lyrics link on this day.";
    root["023"] = d;
    root[23] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply023);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@d4872204a60c6461d71bf0af89d65bf04c703268/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
