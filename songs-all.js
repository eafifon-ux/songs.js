/* songs-all.js — prior overlays, plus day 038 */
(function () {
  function apply038(root) {
    if (!root) return;
    var d = root["038"] || root[38] || {};
    d.heLyricsEn = "Mind commando dives into your thoughts. Do not compare me to anyone else.";
    d.hiLyricsEn = "Spring, shower flowers. My beloved has come.";
    d.hiLyricsHi = "बहारों फूल बरसाओ\nमेरा महबूब आया है";
    root["038"] = d;
    root[38] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply038);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@75ae53fa68e69f614f0895110f63b7f8b27d2c19/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
