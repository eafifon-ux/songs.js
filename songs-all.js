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
  function apply001(root) {
    if (!root) return;
    var src = {"quoteEn":"Nature allows every person to cope with their fate.","quoteHi":"प्रकृति हर इंसान को अपने भाग्य का सामना करने की ताकत देती है।","quoteHe":"הטבע מאפשר לכל אדם להתמודד עם גורלו.","heVideo":"https://www.youtube.com/watch?v=zVi8AI9Yl6k","heLyrics":"https://lyricstranslate.com/en/%D7%90%D7%9E%D7%90%D7%9C%D7%94-%D7%95%D7%90%D7%91%D7%90%D7%9C%D7%94-imale-veabale-dear-mommy-dear-papa.html","heLyricsEn":"Dear Mommy, Dear Papa\nRomanians, Tunisians\nYemenites and Moroccans\nIt does not matter what the ethnic group is\nThose who come say thank you\nFrom Poland and from Caucasia\nTonight no one sits still\nAge does not matter at all\nThe main thing is the dance\nNo cash is needed here\nEveryone move your hips\nMillionaire and pauper\nWhat a great night\nDear Mommy, Dear Papa\nHow the place is filling up","heLyricsHe":"אמאל'ה ואבאל'ה\nרומנים טוניסאים\nתימנים ומרוקאים\nלא חשוב מה העדה\nמי שבא נאמר תודה\nמפולין ומקווקז\nהלילה אף אחד לא זז\nלא חשוב בכלל הגיל\nהעיקר זה התרגיל\nלא צריך כאן מזומן\nכולם תזיזו את האגן\nמיליונר וגם תפרן\nאיזה לילה פאנן\nאמאל'ה ואבאל'ה\nאיך המקום מתמלא","hiVideo":"https://www.youtube.com/watch?v=y2fgw1Oqz28","hiLyrics":"https://lyricstranslate.com/en/lag-ja-gale-embrace-me.html","hiLyricsEn":"Embrace me, dear — who knows if this beautiful night will come again\nPerhaps we may never meet again in this life\nFate has given us these few moments\nLook at me up close, as much as you wish\nYour fate may never have this chance again\nCome closer — I will not return again and again\nLet me wrap my arms around you and cry\nMy eyes may never shed such a shower of love again\nEmbrace me, for this beautiful evening may not come again","hiLyricsHi":"लग जा गले कि फिर ये हसीं रात हो न हो\nशायद फिर इस जनम में मुलाकात हो न हो\nहमको मिली हैं आज ये घड़ियाँ नसीब से\nजी भर के देख लीजिये हमको क़रीब से\nफिर आपके नसीब में ये बात हो न हो\nपास आइये कि हम नहीं आएंगे बार-बार\nबाहें गले में डाल के हम रो लें ज़ार-ज़ार\nआँखों से फिर ये प्यार कि बरसात हो न हो\nलग जा गले कि फिर ये हसीं रात हो न हो"};
    var d = root["001"] || root[1] || {};
    for (var k in src) if (Object.prototype.hasOwnProperty.call(src, k)) d[k] = src[k];
    root["001"] = d;
    root[1] = d;
  }
  function apply002(root) {
    if (!root) return;
    var d = root["002"] || root[2] || {};
    d.heLyricsEn = "You say, No more games.\nPacking a bagful of clothes and going back to your parents.\nNo more clubbing.";
    d.hiLyricsEn = "Every moment you are close to my heart.\nYou say that life is a sweet thirst.";
    d.hiLyricsHi = "पल पल दिल के पास तुम रहते हो";
    root["002"] = d;
    root[2] = d;
  }
  function apply003(root) {
    if (!root) return;
    var d = root["003"] || root[3] || {};
    d.heLyricsEn = "What I asked for... that you tell me that you love me.\nDo you love me? Do you need me? Do you want me?";
    d.hiLyricsEn = "I cannot live without you.\nIf you are not here, nothing else matters.\nWhat is this life without you?";
    d.hiLyricsHi = "तेरे बिना जीना नही\nतू जो नही कुछ भी नही";
    root["003"] = d;
    root[3] = d;
  }
  function patch() {
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(function (root) {
      apply001(root);
      apply002(root);
      apply003(root);
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
