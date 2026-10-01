/* songs-all.js — prior overlays, plus day 008 */
(function () {
  function apply008(root) {
    if (!root) return;
    var d = root["008"] || root[8] || {};
    d.heLyricsEn = "On the paths of Tel Aviv she looks for a place. Time calls her. She wants to fly to Mexico.";
    d.hiLyricsEn = "What is life without you? Nights are dull without you, my love.";
    d.hiLyricsHi = "तेरे बिना बेस्वादी रातियाँ";
    root["008"] = d;
    root[8] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply008);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@8d0851bfc756b0edd35613d9e933900e4bef8e96/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
