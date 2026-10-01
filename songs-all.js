/* songs-all.js — prior overlays, plus day 018 */
(function () {
  function apply018(root) {
    if (!root) return;
    var d = root["018"] || root[18] || {};
    d.heLyricsEn = "Father in heaven, keep my soul. Do not let me fail, and do not let me fall.";
    d.hiLyricsEn = "How did it happen? How did you become so necessary?";
    d.hiLyricsHi = "कैसे हुआ तू इतना ज़रूरी कैसे हुआ";
    root["018"] = d;
    root[18] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply018);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@56c556ea1b50bc923d023ce8e7d75cbc4b923106/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
