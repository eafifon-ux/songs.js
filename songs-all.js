/* songs-all.js — forever @main. Hebrew lyric lines through day 040. */
(function () {
  var HE = {
    1: "Dear Mommy, Dear Papa. Romanians, Tunisians, Yemenites and Moroccans. It does not matter which group you come from. The main thing is the dance.",
    2: "You say, No more games. Packing a bag of clothes and going back to your parents. Your nights are too cold. No more clubbing.",
    3: "What I asked for is that you tell me that you love me. Do you love me? Do you need me? Do you want me?",
    4: "I came from the East. I traveled a long way. For years I dreamed of a land.",
    5: "Without you I am half mad. Let me breathe you in again for a minute.",
    6: "Hey mami, this is not allowed. If they catch us, I am done.",
    7: "Never alone. There is one who understands when the heart is broken.",
    8: "On the paths of Tel Aviv she looks for a place. She wants to fly to Mexico.",
    9: "With you, and always with you at night. I want to love only you until morning shines on you.",
    10: "Dad, at night a moment slips in that no one hears. I feel you close and cannot touch you.",
    12: "For your sake I will suffer every day. I am not going anywhere.",
    13: "You say all the time that in the end it falls apart. You do not see me the way I see you.",
    14: "Your mother always says there is no one like you. I love you, and that is why I am with you.",
    16: "Just do not break my heart. Hold me tight, then move on. I still love you.",
    17: "A little girl in a big world. My heart is breaking, dear Father. Do not leave me.",
    18: "Father in heaven, keep my soul. Do not let me fail, and do not let me fall.",
    20: "Come give me a sign. I have no air left. Only you can come and mend this.",
    32: "I do not care what they say about me. They are talking. What do they know about me?",
    33: "Hang up. I want nothing from you. And you are still here.",
    34: "By the sea I remember you. They say a closed door is not opened again.",
    35: "At night you were always with me. Do not worry. I am here.",
    36: "Some people climb mountains. I like being at home, with tea, lemon, and old books.",
    37: "Let us sit and talk. I will not keep it in anymore. I miss you.",
    38: "Mind commando dives into your thoughts. Do not compare me to anyone else.",
    39: "Father, do not leave me. I am afraid now, so come and be with me.",
    40: "How do I look? Like a million bucks."
  };
  function apply(root) {
    if (!root) return false;
    var hit = false;
    Object.keys(HE).forEach(function (n) {
      var key = String(n).padStart(3, "0");
      var d = root[key] || root[Number(n)];
      if (!d) return;
      d.heLyricsEn = HE[n];
      root[key] = d;
      root[Number(n)] = d;
      hit = true;
    });
    return hit;
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
