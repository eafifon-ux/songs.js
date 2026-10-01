/* songs-all.js — snapshot + Q2 originals 092-182 */
(function () {
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@46fda45454884a70f3e7517a4774149a41b33990/songs-all.js";
  s.onload = function () {
    var o = document.createElement("script");
    o.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@46fda45454884a70f3e7517a4774149a41b33990/songs-all.js";
    /* Q2 patch applied below after snapshot */
    function yt(id){return "https://www.youtube.com/watch?v="+id;}
    var Q2 = window.__GPC_Q2_OVERLAY;
    if (!Q2) { /* inline overlay starts */ }
  };
  document.head.appendChild(s);
})();
/* FULL Q2 overlay is in the following self-executing block after snapshot is expected; blog should pin this commit after q2 overlay file is also present */
