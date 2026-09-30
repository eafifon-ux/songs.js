/* GPC364 Song of the Day loader — does not touch torah.js */
(function(){
  var s = window.GPC_SONGS = window.GPC_SONGS || {};
  var d;
  for (d=1; d<=91; d++) if (!s[d] && !s[String(d)]) s[d] = {pending:"Re-paste Q1 (D001–D091) to fill this day."};
  for (d=183; d<=273; d++) if (!s[d] && !s[String(d)]) s[d] = {pending:"Re-paste Q3 (D183–D273) to fill this day."};
  function merge(src){
    if (!src) return;
    Object.keys(src).forEach(function(k){ s[k] = src[k]; s[Number(k)] = src[k]; });
  }
  merge(window.SONGS_Q2);
  merge(window.SONGS_Q4);
  window.SONGS = s;
})();
