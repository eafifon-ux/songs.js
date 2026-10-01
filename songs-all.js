/* songs-all.js — prior overlays, plus day 014 */
(function () {
  function apply014(root) {
    if (!root) return;
    var d = root["014"] || root[14] || {};
    d.heLyricsEn = "Your mother always says there is no one like you. I love you, and that is why I am with you.";
    d.hiLyricsEn = "The heart is crazy. It makes you meet someone, then lights a fire in the chest.";
    d.hiLyricsHi = "दिल तो पागल है";
    root["014"] = d;
    root[14] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply014);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@562362cc70a39cf75f8fd65efde640eeb03c9ff8/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
