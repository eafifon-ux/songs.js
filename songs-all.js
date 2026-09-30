/* songs-all.js — the one blog file. Has 051-070 inline, then loads the rest from @main. */
window.SONGS_Q1 = window.SONGS_Q1 || {};
Object.assign(window.SONGS_Q1, {
"51":{"quoteEn":"Wise men speak because they have something to say; fools because they have to say something.","quoteHi":"बुद्धिमान इसलिए बोलते हैं कि उनके पास कहने को कुछ है; मूर्ख इसलिए कि उन्हें कुछ कहना ही है।","quoteHe":"חכמים מדברים כי יש להם מה לומר; כסילים מדברים כי הם מוכרחים לומר משהו.","cite":"Plato","heVideo":"https://www.youtube.com/watch?v=HXz70eAaiMA","hiVideo":"https://www.youtube.com/watch?v=oWKgpB2zpgw"},
"91":{"quoteEn":"It is not because the well is too deep, but because the rope is too short.","quoteHi":"यह इसलिए नहीं कि कुआँ बहुत गहरा है, बल्कि इसलिए कि रस्सी बहुत छोटी है।","quoteHe":"אין זה משום שהבאר עמוקה מדי, אלא בגלל שהחבל קצר.","heVideo":"https://www.youtube.com/watch?v=63pxZIy7m_8","hiVideo":"https://www.youtube.com/watch?v=oWKgpB2zpgw"}
});
(function(){
  var src=window.SONGS_Q1;
  Object.keys(src).forEach(function(k){
    var n=parseInt(k,10); if(isNaN(n)) return;
    src[('000'+n).slice(-3)]=src[k]; src[String(n)]=src[k];
  });
  window.GPC_SONGS_Q1=src; window.GPC_SONGS=window.GPC_SONGS||{}; window.SONGS=window.SONGS||{};
  Object.keys(src).forEach(function(k){ window.GPC_SONGS[k]=src[k]; window.SONGS[k]=src[k]; });
  function paint(){ if(typeof window.GPCPaintSongs==='function') window.GPCPaintSongs(); }
  var files=['songs-q1.js','songs-q1b.js','songs-q1c.js','songs-q1d.js','songs-q1e.js','songs-q1-more.js','songs-q1f.js','songs-q1g.js','songs-q1h.js','songs-q2.js','songs-q2b.js','songs-q2c.js','songs-q3.js','songs-q4.js'];
  var i=0, BASE='https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@main/';
  function next(){
    if(i>=files.length){ paint(); return; }
    var s=document.createElement('script');
    s.src=BASE+files[i++]+'?v=q1h';
    s.onload=function(){ paint(); next(); };
    s.onerror=next;
    document.head.appendChild(s);
  }
  paint(); next();
})();
