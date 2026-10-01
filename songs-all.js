/* songs-all.js — prior overlays, plus day 016 */
(function () {
  function apply016(root) {
    if (!root) return;
    var d = root["016"] || root[16] || {};
    d.heLyricsEn = "Just do not break my heart. Hold me tight, then move on. I still love you.";
    d.hiLyricsEn = "There is some bond with you. You are my companion, so why should I worry?";
    d.hiLyricsHi = "कुछ तो है तुझसे राब्ता";
    root["016"] = d;
    root[16] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply016);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@cbec1fa8c0ca8596af10559baca0a37796e15b52/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
