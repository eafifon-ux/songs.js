/* GPC364 Song of the Day loader — does not touch torah.js */
(function(){
  var s = window.GPC_SONGS = window.GPC_SONGS || {};
  function merge(src){
    if (!src) return;
    Object.keys(src).forEach(function(k){ s[k] = src[k]; s[String(Number(k))] = src[k]; s[Number(k)] = src[k]; });
  }
  merge(window.SONGS_Q1); merge(window.GPC_SONGS_Q1);
  merge(window.SONGS_Q2); merge(window.GPC_SONGS_Q2);
  merge(window.SONGS_Q3); merge(window.GPC_SONGS_Q3);
  merge(window.SONGS_Q4); merge(window.GPC_SONGS_Q4);
  window.SONGS = s;
})();
