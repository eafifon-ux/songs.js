/* padded aliases so getDay('002') never misses */
window.SONGS_Q1 = window.SONGS_Q1 || {};
if (window.SONGS_Q1["2"] && !window.SONGS_Q1["002"]) window.SONGS_Q1["002"] = window.SONGS_Q1["2"];
["3","4","5","6","7","8","9","10","15","31","63","85","91"].forEach(function(k){
  var p = ('000'+k).slice(-3);
  if (window.SONGS_Q1[k] && !window.SONGS_Q1[p]) window.SONGS_Q1[p] = window.SONGS_Q1[k];
});
