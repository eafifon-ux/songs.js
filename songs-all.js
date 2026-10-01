/* songs-all.js — working loader, plus day 001 lyric text */
(function () {
  function apply001(root) {
    if (!root) return;
    var d = root["001"] || root[1];
    if (!d) return;
    d.heLyricsEn = "Dear Mommy, Dear Papa. It does not matter which group you come from. The main thing is the dance.";
    d.heLyricsHe = "אמאל'ה ואבאל'ה. לא חשוב מה העדה. העיקר זה התרגיל.";
    d.hiLyricsEn = "Embrace me, dear. Who knows if this beautiful night will come again.";
    d.hiLyricsHi = "लग जा गले कि फिर ये हसीं रात हो न हो";
  }
  function show() {
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(apply001);
    ["he", "hi"].forEach(function (prefix) {
      var link = document.getElementById(prefix + "-lyrics");
      if (!link) return;
      var body = document.getElementById(prefix + "-lyrics-en");
      if (!body) {
        body = document.createElement("pre");
        body.id = prefix + "-lyrics-en";
        body.className = "lyric-body";
        body.style.cssText = "white-space:pre-wrap;color:#f4f1ea;font-size:15px;line-height:1.45;margin:12px 0 0;";
        link.parentNode.appendChild(body);
      }
    });
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  function tick(n) {
    if (window.GPC_SONGS || window.SONGS) show();
    if (n < 30) setTimeout(function () { tick(n + 1); }, 250);
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@e1a420e035b755d1f445fb5a3b5cdb74e486154e/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
})();
