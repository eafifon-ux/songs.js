/* songs-all.js — prior overlays, plus day 009 */
(function () {
  function apply009(root) {
    if (!root) return;
    var d = root["009"] || root[9] || {};
    d.heLyricsEn = "With you, and always with you at night. I want to love only you until morning shines on you.";
    d.hiLyricsEn = "If we know each other, living would be easy. Do not look away. Tell me your name.";
    d.hiLyricsHi = "जान पहचान हो\nजीना आसान हो";
    root["009"] = d;
    root[9] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply009);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@f003dd29f23a1e42506ec1d67900fb64a754e9eb/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
