/* songs-all.js — prior overlays, plus day 020 */
(function () {
  function apply020(root) {
    if (!root) return;
    var d = root["020"] || root[20] || {};
    d.heLyricsEn = "Come give me a sign. I have no air left. Only you can come and mend this.";
    d.hiLyricsEn = "Ask how I am. Without you, one day feels like a hundred years.";
    d.hiLyricsHi = "ख़ैरियत पूछो\nकभी तो कैफ़ियत पूछो";
    root["020"] = d;
    root[20] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply020);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@b8a711df4b73ff7e1d13ede5e8c252d6bac85047/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
