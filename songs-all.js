/* songs-all.js — prior overlays, plus day 010 */
(function () {
  function apply010(root) {
    if (!root) return;
    var d = root["010"] || root[10] || {};
    d.heLyricsEn = "Dad, at night a moment slips in that no one hears. I feel you close and cannot touch you.";
    d.hiLyricsEn = "This lively evening intoxicates me. A string pulls me toward you.";
    d.hiLyricsHi = "ये शाम मस्तानी\nमदहोश किए जाए";
    root["010"] = d;
    root[10] = d;
  }
  function tick(n) {
    if (!window.GPC_SONGS && !window.SONGS) {
      if (n < 40) return setTimeout(function () { tick(n + 1); }, 200);
      return;
    }
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply010);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@0c75d3a5a70661702e04f606a4becef425cac37a/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
