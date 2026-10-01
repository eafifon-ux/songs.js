/* songs-all.js — forever file. Loads the working snapshot, then lyric text. */
(function () {
  function day(root, n) {
    if (!root) return null;
    var key = String(n).padStart(3, "0");
    return root[key] || root[n] || null;
  }
  function patch() {
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(function (root) {
      var a = day(root, 1);
      if (a) {
        a.heLyricsEn = "Dear Mommy, Dear Papa.\nRomanians, Tunisians, Yemenites and Moroccans.\nIt does not matter which group you come from.\nWhoever comes, we say thank you.\nFrom Poland and from Caucasia, tonight no one sits still.\nAge does not matter. The main thing is the dance.\nNo cash is needed here. Everyone move your hips.\nMillionaire and pauper. What a great night.\nDear Mommy, Dear Papa. How the place is filling up.";
        a.heLyricsHe = "אמאל'ה ואבאל'ה\nרומנים טוניסאים\nתימנים ומרוקאים\nלא חשוב מה העדה\nמי שבא נאמר תודה\nמפולין ומקווקז\nהלילה אף אחד לא זז\nלא חשוב בכלל הגיל\nהעיקר זה התרגיל";
        a.hiLyricsEn = "Embrace me, dear. Who knows if this beautiful night will come again.\nPerhaps we may never meet again in this life.";
        a.hiLyricsHi = "लग जा गले कि फिर ये हसीं रात हो न हो";
      }
      var b = day(root, 2);
      if (b) {
        b.heLyricsEn = "You say, No more games.\nPacking a bag of clothes and going back to your parents.\nYour nights are too cold.\nNo more clubbing. Rounds all night long.";
        b.heLyricsHe = "אין יותר מועדונים";
        b.hiLyricsEn = "Every moment you are close to my heart.\nYou say that life is a sweet thirst.";
        b.hiLyricsHi = "पल पल दिल के पास तुम रहते हो";
      }
    });
    ["he", "hi"].forEach(function (prefix) {
      var link = document.getElementById(prefix + "-lyrics");
      if (!link) return;
      if (!document.getElementById(prefix + "-lyrics-en")) {
        var body = document.createElement("pre");
        body.id = prefix + "-lyrics-en";
        body.className = "lyric-body";
        body.style.cssText = "white-space:pre-wrap;color:#f4f1ea;font-size:15px;line-height:1.45;margin:12px 0 0;";
        link.parentNode.appendChild(body);
      }
    });
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  function tick(n) {
    if (window.GPC_SONGS || window.SONGS) patch();
    if (n < 30) setTimeout(function () { tick(n + 1); }, 250);
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@e1a420e035b755d1f445fb5a3b5cdb74e486154e/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
