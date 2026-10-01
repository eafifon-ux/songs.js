/* songs-all.js — prior overlays, plus day 034 */
(function () {
  function apply034(root) {
    if (!root) return;
    var d = root["034"] || root[34] || {};
    d.heLyricsEn = "By the sea I remember you. They say a closed door is not opened again.";
    d.hiLyricsEn = "Your beauty is intoxicating, and my love is mad. I am afraid we may make a mistake.";
    d.hiLyricsHi = "रूप तेरा मस्ताना\nप्यार मेरा दीवाना";
    root["034"] = d;
    root[34] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply034);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@825205fc02c77a505b6efaa64d6262016ec6deeb/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
