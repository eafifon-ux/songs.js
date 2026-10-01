/* songs-all.js — prior overlays, plus day 032 */
(function () {
  function apply032(root) {
    if (!root) return;
    var d = root["032"] || root[32] || {};
    d.heLyricsEn = "I do not care what they say about me. They are talking. What do they know about me?";
    d.hiLyricsEn = "Look, the distance is gone. I am here. I am the voice of your heart.";
    d.hiLyricsHi = "मैं यहाँ हूँ\nयहाँ हूँ";
    root["032"] = d;
    root[32] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply032);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@b72cfd6d6a5ebd5cefc15fbbe560e343889beed2/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
