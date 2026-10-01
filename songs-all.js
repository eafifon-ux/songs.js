/* songs-all.js — prior overlays, plus day 036 */
(function () {
  function apply036(root) {
    if (!root) return;
    var d = root["036"] || root[36] || {};
    d.heLyricsEn = "Some people climb mountains. I like being at home, with tea, lemon, and old books.";
    d.hiLyricsEn = "I am Laila. Everyone wants to meet me alone. Whoever I look at forgets the world.";
    d.hiLyricsHi = "लैला मैं लैला ऐसी हूँ लैला";
    root["036"] = d;
    root[36] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply036);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@57a45e37768f01295aac7e054cfece9e51e48128/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
