/* songs-all.js — previous overlays, plus day 007 */
(function () {
  function apply007(root) {
    if (!root) return;
    var d = root["007"] || root[7] || {};
    d.heLyricsEn = "Never alone. There is one who understands when the heart is broken.";
    d.hiLyricsEn = "It is a song of love, the flow of waves. Life is nothing else but our story.";
    d.hiLyricsHi = "एक प्यार का नगमा है\nमौजों की रवानी है";
    root["007"] = d;
    root[7] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply007);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@a76da794e980a319a6ab5197cb9a22153c3049d6/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
