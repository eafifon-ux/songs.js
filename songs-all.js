/* songs-all.js — THE only file the blog should load. No extra loaders. */
window.SONGS_Q1 = window.SONGS_Q1 || {};
Object.assign(window.SONGS_Q1, {
"51":{"quoteEn":"Wise men speak because they have something to say; fools because they have to say something.","quoteHi":"बुद्धिमान इसलिए बोलते हैं कि उनके पास कहने को कुछ है; मूर्ख इसलिए कि उन्हें कुछ कहना ही है।","quoteHe":"חכמים מדברים כי יש להם מה לומר; כסילים מדברים כי הם מוכרחים לומר משהו.","cite":"Plato","heVideo":"https://www.youtube.com/watch?v=HXz70eAaiMA","hiVideo":"https://www.youtube.com/watch?v=oWKgpB2zpgw"},
"71":{"quoteEn":"Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination.","quoteHi":"संगीत एक नैतिक नियम है।","quoteHe":"המוסיקה היא חוק מוסרי.","cite":"Plato","heVideo":"https://www.youtube.com/watch?v=6JNw4Qea2Yc","hiVideo":"https://www.youtube.com/watch?v=7OU_tOtkwqI"},
"91":{"quoteEn":"It is not because the well is too deep, but because the rope is too short.","quoteHi":"यह इसलिए नहीं कि कुआँ बहुत गहरा है, बल्कि इसलिए कि रस्सी बहुत छोटी है।","quoteHe":"אין זה משום שהבאר עמוקה מדי, אלא בגלל שהחבל קצר.","heVideo":"https://www.youtube.com/watch?v=63pxZIy7m_8","heLyrics":"https://lyricstranslate.com/en/eser-etzbaout-ten-fingers.html","hiVideo":"https://www.youtube.com/watch?v=oWKgpB2zpgw","hiLyrics":"https://lyricstranslate.com/en/abhi-mujh-mein-kahin-still-somewhere-inside-me.html"}
});
(function(){
  var s=window.SONGS_Q1;
  Object.keys(s).forEach(function(k){
    var n=parseInt(k,10); if(isNaN(n)) return;
    s[('000'+n).slice(-3)]=s[k]; s[String(n)]=s[k]; s[n]=s[k];
  });
  window.GPC_SONGS_Q1=s;
  window.GPC_SONGS=window.GPC_SONGS||{};
  window.SONGS=window.SONGS||{};
  Object.keys(s).forEach(function(k){ window.GPC_SONGS[k]=s[k]; window.SONGS[k]=s[k]; });
  function paint(){ if(typeof window.GPCPaintSongs==='function') window.GPCPaintSongs(); }
  paint(); setTimeout(paint,300); setTimeout(paint,1200);
})();
