/* songs-all.js — song data, then day 001 and 002 lyric text. No paint loop. */
(function () {
  function apply(root) {
    if (!root) return false;
    var a = root["001"] || root[1];
    var b = root["002"] || root[2];
    if (!a || !b) return false;
    a.heLyricsEn = "Dear Mommy, Dear Papa.\nRomanians, Tunisians, Yemenites and Moroccans.\nIt does not matter which group you come from.\nWhoever comes, we say thank you.\nFrom Poland and from Caucasia, tonight no one sits still.\nAge does not matter. The main thing is the dance.\nNo cash is needed here. Everyone move your hips.\nMillionaire and pauper. What a great night.\nDear Mommy, Dear Papa. How the place is filling up.";
    a.heLyricsHe = "אמאל'ה ואבאל'ה\nרומנים טוניסאים\nתימנים ומרוקאים\nלא חשוב מה העדה\nהעיקר זה התרגיל";
    a.hiLyricsEn = "Embrace me, dear. Who knows if this beautiful night will come again.";
    b.heLyricsEn = "You say, No more games.\nPacking a bag of clothes and going back to your parents.\nYour nights are too cold.\nNo more clubbing. Rounds all night long.";
    b.heLyricsHe = "אין יותר מועדונים";
    b.hiLyricsEn = "Every moment you are close to my heart. You say that life is a sweet thirst.";
    b.hiLyricsHi = "पल पल दिल के पास तुम रहते हो";
    root["001"] = a; root[1] = a; root["002"] = b; root[2] = b;
    return true;
  }
  function box(prefix) {
    var link = document.getElementById(prefix + "-lyrics");
    if (!link || document.getElementById(prefix + "-lyrics-en")) return;
    var body = document.createElement("pre");
    body.id = prefix + "-lyrics-en";
    body.style.cssText = "white-space:pre-wrap;color:#f4f1ea;font-size:15px;line-height:1.45;margin:12px 0 0;";
    link.parentNode.appendChild(body);
  }
  function paintOnce() {
    var ready = false;
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(function (root) {
      if (apply(root)) ready = true;
    });
    box("he"); box("hi");
    if (ready && typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
    return ready;
  }
  function tick(n) {
    if (!paintOnce() && n < 40) setTimeout(function () { tick(n + 1); }, 250);
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@46fda45454884a70f3e7517a4774149a41b33990/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
