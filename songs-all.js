/* songs-all.js — prior overlays, plus day 035 */
(function () {
  function apply035(root) {
    if (!root) return;
    var d = root["035"] || root[35] || {};
    d.heLyricsEn = "At night you were always with me. Do not worry. I am here.";
    d.hiLyricsEn = "If a spark ignites, the rain can put it out. But a fire lit by the rain, who can put that out?";
    d.hiLyricsHi = "चिंगारी कोई भड़के\nतो सावन उसे बुझाये";
    root["035"] = d;
    root[35] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply035);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@8a453adce9dc59f10685cd8d6d529597dad5fa19/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
