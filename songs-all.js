/* songs-all.js — forever file. Patches after the song data exists. */
(function () {
  var HE1 = "Dear Mommy, Dear Papa.\nRomanians, Tunisians, Yemenites and Moroccans.\nIt does not matter which group you come from.\nWhoever comes, we say thank you.\nFrom Poland and from Caucasia, tonight no one sits still.\nAge does not matter. The main thing is the dance.\nNo cash is needed here. Everyone move your hips.\nMillionaire and pauper. What a great night.\nDear Mommy, Dear Papa. How the place is filling up.";
  var HE2 = "You say, No more games.\nPacking a bag of clothes and going back to your parents.\nYour nights are too cold.\nNo more clubbing. Rounds all night long.";
  function pad(n) { return String(n).padStart(3, "0"); }
  function apply(root) {
    if (!root) return false;
    var a = root["001"] || root[1];
    var b = root["002"] || root[2];
    if (a) {
      a.heLyricsEn = HE1;
      a.heLyricsHe = "אמאל'ה ואבאל'ה\nרומנים טוניסאים\nתימנים ומרוקאים\nלא חשוב מה העדה\nהעיקר זה התרגיל";
      a.hiLyricsEn = "Embrace me, dear. Who knows if this beautiful night will come again.";
      root["001"] = a; root[1] = a;
    }
    if (b) {
      b.heLyricsEn = HE2;
      b.heLyricsHe = "אין יותר מועדונים";
      b.hiLyricsEn = "Every moment you are close to my heart. You say that life is a sweet thirst.";
      b.hiLyricsHi = "पल पल दिल के पास तुम रहते हो";
      root["002"] = b; root[2] = b;
    }
    return !!(a && b);
  }
  function ensureBox(prefix) {
    var link = document.getElementById(prefix + "-lyrics");
    if (!link || document.getElementById(prefix + "-lyrics-en")) return;
    var body = document.createElement("pre");
    body.id = prefix + "-lyrics-en";
    body.className = "lyric-body";
    body.style.cssText = "white-space:pre-wrap;color:#f4f1ea;font-size:15px;line-height:1.45;margin:12px 0 0;";
    link.parentNode.appendChild(body);
  }
  function patch() {
    var ready = false;
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(function (root) {
      if (apply(root)) ready = true;
    });
    ensureBox("he"); ensureBox("hi");
    if (ready && typeof window.GPCPaintSongs === "function" && !window.GPCPaintSongs.__gpcLyric) {
      var paint = window.GPCPaintSongs;
      function wrapped() { patch(); return paint.apply(this, arguments); }
      wrapped.__gpcLyric = true;
      window.GPCPaintSongs = wrapped;
    }
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
    return ready;
  }
  function tick(n) {
    var ready = patch();
    if (!ready && n < 40) setTimeout(function () { tick(n + 1); }, 250);
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@e1a420e035b755d1f445fb5a3b5cdb74e486154e/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
  tick(0);
})();
