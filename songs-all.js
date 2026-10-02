/* songs-all.js — day 002 lyric written into the card after the song list loads */
(function () {
  var HE2 = "You say, no more games. You pack a bag of clothes and go back to your parents, because your nights are too cold. You go round and round until the friends run out. You are sick of the men in the clubs, coming home drunk, smelling of cigarettes, falling onto the sheets. You looked for someone settled. No more clubbing. Rounds all night long.";
  var HE1 = "Dear Mommy, Dear Papa. Romanians, Tunisians, Yemenites and Moroccans. It does not matter which group you come from. Whoever comes, we say thank you. From Poland and from Caucasia, tonight no one sits still. Age does not matter. The main thing is the dance. No cash is needed. Everyone move your hips. Millionaire and pauper, what a great night. Dear Mommy, Dear Papa, how the place is filling up.";
  function pad(n) { return String(n).padStart(3, "0"); }
  function setDay(root, n, text) {
    if (!root) return;
    var key = pad(n);
    var d = root[key] || root[n] || root[String(n)];
    if (!d) return;
    d.heLyricsEn = text;
    root[key] = d;
    root[n] = d;
    root[String(n)] = d;
  }
  function fillCard() {
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(function (root) {
      setDay(root, 1, HE1);
      setDay(root, 2, HE2);
    });
    var title = document.getElementById("day-title");
    var body = document.getElementById("he-lyrics-en");
    if (!title || !body) return;
    var label = title.textContent || "";
    if (/\b002\b/.test(label) || /\bDay 2\b/.test(label)) {
      body.textContent = HE2;
      body.style.display = "";
      body.setAttribute("dir", "ltr");
    } else if (/\b001\b/.test(label)) {
      body.textContent = HE1;
      body.style.display = "";
    }
    if (typeof window.GPCPaintSongs === "function" && !window.GPCPaintSongs.__gpc2) {
      var paint = window.GPCPaintSongs;
      function wrapped() {
        var r = paint.apply(this, arguments);
        fillCard();
        return r;
      }
      wrapped.__gpc2 = true;
      window.GPCPaintSongs = wrapped;
    }
  }
  function tick(n) {
    fillCard();
    if (n < 40) setTimeout(function () { tick(n + 1); }, 250);
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@46fda45454884a70f3e7517a4774149a41b33990/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
  tick(0);
})();
