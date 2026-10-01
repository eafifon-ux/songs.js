/* songs-all.js — prior overlays, plus day 012 */
(function () {
  function apply012(root) {
    if (!root) return;
    var d = root["012"] || root[12] || {};
    d.heLyricsEn = "For your sake I will suffer every day. I am not going anywhere.";
    d.hiLyricsEn = "I see God in you. You are my heaven, and the peace of my soul.";
    d.hiLyricsHi = "तुझ में रब दिखता है";
    root["012"] = d;
    root[12] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply012);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@89391f210297c856758f9afd9c4f1f330a6755e8/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
