/* songs-all.js — load last complete snapshot, then apply source overlays */
(function () {
  function apply146(root) {
    var d = root && (root["146"] || root[146]);
    if (!d) return;
    d.quoteHi = "चिंता नकारात्मक लक्ष्य निर्धारण है।";
    d.quoteHe = "דאגה היא הגדרת יעדים שלילית.";
  }
  function apply198(root) {
    var d = root && (root["198"] || root[198]);
    if (!d) {
      if (!root) return;
      d = {};
      root["198"] = d;
      root[198] = d;
    }
    d.quoteEn = "It is better to create than to learn! Creation is the essence of life.";
    d.quoteHi = "सीखने से बेहतर है कि आप कुछ रचें! सृजन जीवन का सार है।";
    d.quoteHe = "עדיף ליצור מאשר ללמוד! היצירה היא מהות החיים.";
    d.cite = "Julius Caesar";
    d.quoteBy = "Julius Caesar";
    d.author = "Julius Caesar";
  }
  function patch() {
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(function (root) {
      apply146(root);
      apply198(root);
    });
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@46fda45454884a70f3e7517a4774149a41b33990/songs-all.js";
  s.onload = patch;
  document.head.appendChild(s);
})();
