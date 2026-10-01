/* songs-all.js — prior overlays, plus day 013 */
(function () {
  function apply013(root) {
    if (!root) return;
    var d = root["013"] || root[13] || {};
    d.heLyricsEn = "You say all the time that in the end it falls apart. You do not see me the way I see you.";
    d.hiLyricsEn = "With you there is love and restlessness. Without you I cannot live.";
    d.hiLyricsHi = "पी लूँ तेरे नीले नीले नैनों से शबनम";
    root["013"] = d;
    root[13] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply013);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@c006cb5ca8eacfebd4224c4a8c815f77f9ca73fa/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
