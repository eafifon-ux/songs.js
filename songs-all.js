/* songs-all.js — load complete snapshot, then Q2 overlay 092-182 */
(function () {
  function load(src, next) {
    var s = document.createElement("script");
    s.src = src;
    s.onload = next || function () {};
    document.head.appendChild(s);
  }
  load("https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@46fda45454884a70f3e7517a4774149a41b33990/songs-all.js", function () {
    load("https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@46fda45454884a70f3e7517a4774149a41b33990/songs-all.js", function () {
      var d = (window.GPC_SONGS && (window.GPC_SONGS["146"] || window.GPC_SONGS[146])) || {};
      d.quoteHi = "\u091a\u093f\u0902\u0924\u093e \u0928\u0915\u093e\u0930\u093e\u0924\u094d\u092e\u0915 \u0932\u0915\u094d\u0937\u094d\u092f \u0928\u093f\u0930\u094d\u0927\u093e\u0930\u0923 \u0939\u0948\u0964";
      d.quoteHe = "\u05d3\u05d0\u05d2\u05d4 \u05d4\u05d9\u05d0 \u05d4\u05d2\u05d3\u05e8\u05ea \u05d9\u05e2\u05d3\u05d9\u05dd \u05e9\u05dc\u05d9\u05dc\u05d9\u05ea.";
      if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
    });
  });
})();
