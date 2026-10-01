/* songs-all.js — load last complete snapshot, then apply source overlays */
(function () {
  function apply146(root) {
    var d = root && (root["146"] || root[146]);
    if (!d) return;
    d.quoteHi = "चिंता नकारात्मक लक्ष्य निर्धारण है।";
    d.quoteHe = "דאגה היא הגדרת יעדים שלילית.";
  }
  function patch() {
    apply146(window.GPC_SONGS);
    apply146(window.SONGS);
    apply146(window.SONGS_Q1);
    apply146(window.SONGS_Q2);
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@46fda45454884a70f3e7517a4774149a41b33990/songs-all.js";
  s.onload = patch;
  document.head.appendChild(s);
})();
