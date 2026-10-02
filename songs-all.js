/* songs-all.js — keep day 002 lyric on the card after every paint */
(function () {
  var HE2 = "You say, no more games. You pack a bag of clothes and go back to your parents, because your nights are too cold. You go round and round until the friends run out. You are sick of the men in the clubs, coming home drunk, smelling of cigarettes, falling onto the sheets. You looked for someone settled. No more clubbing. Rounds all night long.";
  var HE1 = "Dear Mommy, Dear Papa. Romanians, Tunisians, Yemenites and Moroccans. It does not matter which group you come from. Whoever comes, we say thank you. From Poland and from Caucasia, tonight no one sits still. Age does not matter. The main thing is the dance. No cash is needed. Everyone move your hips. Millionaire and pauper, what a great night. Dear Mommy, Dear Papa, how the place is filling up.";
  function pad(n) { return String(n).padStart(3, "0"); }
  function setDay(root, n, text) {
    if (!root) return;
    var d = root[pad(n)] || root[n] || root[String(n)];
    if (!d) return;
    d.heLyricsEn = text;
    root[pad(n)] = d;
    root[n] = d;
    root[String(n)] = d;
  }
  function writeCard() {
    var title = document.getElementById("day-title");
    var body = document.getElementById("he-lyrics-en");
    if (!title || !body) return;
    var label = title.textContent || "";
    if (label.indexOf("002") !== -1) {
      body.textContent = HE2;
      body.style.display = "block";
      body.style.whiteSpace = "pre-wrap";
      body.style.color = "#f4f1ea";
      body.style.margin = "12px 0 0";
    } else if (label.indexOf("001") !== -1) {
      body.textContent = HE1;
      body.style.display = "block";
    }
  }
  function apply() {
    [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4].forEach(function (root) {
      setDay(root, 1, HE1);
      setDay(root, 2, HE2);
    });
    writeCard();
  }
  if (typeof window.GPCPaintSongs === "function" && !window.GPCPaintSongs.__gpc2) {
    var paint = window.GPCPaintSongs;
    function wrapped() {
      var r = paint.apply(this, arguments);
      apply();
      return r;
    }
    wrapped.__gpc2 = true;
    window.GPCPaintSongs = wrapped;
  }
  function tick(n) {
    apply();
    if (n < 30) setTimeout(function () { tick(n + 1); }, 300);
  }
  window.addEventListener("hashchange", function () { setTimeout(apply, 80); });
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@46fda45454884a70f3e7517a4774149a41b33990/songs-all.js";
  s.onload = function () { tick(0); };
  document.head.appendChild(s);
  tick(0);
})();
