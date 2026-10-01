/* songs-all.js — prior overlays, plus day 017 */
(function () {
  function apply017(root) {
    if (!root) return;
    var d = root["017"] || root[17] || {};
    d.heLyricsEn = "A little girl in a big world. My heart is breaking, dear Father. Do not leave me.";
    d.hiLyricsEn = "I saw you and learned that love is crazy. Now where do I go from here?";
    d.hiLyricsHi = "तुझे देखा तो ये जाना सनम";
    root["017"] = d;
    root[17] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply017);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@1cfc5eab391fef3693c563d7b738e9119cc7b584/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
