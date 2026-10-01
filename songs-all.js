/* songs-all.js — forever @main. Fuller Hebrew lyric paraphrases. */
(function () {
  var HE = {
    1: "Dear Mommy, Dear Papa. Romanians, Tunisians, Yemenites and Moroccans are here. It does not matter which group you come from. Whoever comes, we say thank you. From Poland and from Caucasia, tonight no one sits still. Age does not matter. The main thing is the dance. No cash is needed. Everyone move your hips. Millionaire and pauper, what a great night. Dear Mommy, Dear Papa, how the place is filling up.",
    2: "You say, no more games. You pack a bag of clothes and go back to your parents, because your nights are too cold. You go round and round until the friends run out. You are sick of the men in the clubs, coming home drunk, smelling of cigarettes, falling onto the sheets. You looked for someone settled, someone who would give you the quiet you saw in other people. You found you cannot always find the one who will say it. No more clubbing. Rounds all night long.",
    3: "What I asked for is that you tell me that you love me. Do you love me? Do you need me? Do you want me? Say it from the heart. Say that you think about me.",
    4: "I came from the East. I traveled a long way. For years I dreamed of a land, a beloved land.",
    5: "Without you I am half mad. Let me breathe you in again for a minute. You left me alone.",
    6: "Hey mami, this is not allowed. If they catch us, I am done. Everyone is dancing tonight.",
    7: "Never alone. There is one who understands when the heart is broken. There is a way through, up in the clouds. There are endless signs. Everything is for the best, so there is no reason to blame. Even if people disappoint. A year has passed and nothing works, and the heart keeps burning. He comes and whispers: never alone. He holds my hand when I fall, takes my tears, and takes the sword away.",
    8: "On the paths of Tel Aviv she looks for a place. Time calls her. She wants to fly to Mexico.",
    9: "With you, and always with you at night. I want to love only you until morning shines on you.",
    10: "Dad, at night a moment slips in that no one hears. I feel you close and cannot touch you.",
    12: "For your sake I will suffer every day. I am not going anywhere.",
    13: "You say all the time that in the end it falls apart. You do not see me the way I see you.",
    14: "Your mother always says there is no one like you. I love you, and that is why I am with you.",
    16: "Just do not break my heart. Hold me tight, then move on. I still love you.",
    17: "A little girl in a big world. My heart is breaking, dear Father. Do not leave me.",
    18: "Father in heaven, keep my soul so it stays holy and clean. Do not ever let me fail, and do not ever let me fall. Let me feel you always close, always loving. Maker of my soul, hear my voice when I call.",
    20: "For two days my time has stood still. I have no air left, so let me breathe. You keep me awake. Your laugh is still in the room. Come give me a sign. I know you will be here on time, a second before the silence. Only you can come and mend this.",
    32: "I do not care what they say about me. They are talking. What do they know about me? I live for the ones who are crazy about me. I am not a puppet. I am the one who decides. Today the lights are on me.",
    33: "You are difficult, and I am difficult. The gap between us is a chasm. Only I go, work, return, sit, think, write, love, and you are still here. I fell hard into you. Hang up. I want nothing from you. And even if I cannot find the quiet without you, I am not coming back.",
    34: "I am by the water now, clearing a few days and a few memories. We dreamed of a home here, a view of the waves. Life slapped me twice. They say a closed door is not opened again. I sit on the sand and write. Why am I breaking again? I remember you by the sea. I wash my face and drift in the memories. Maybe in another life I would have spoken, and you would have too. Now I only imagine you.",
    35: "I am thinking of you, where you are and where I am. The gap between us is a chasm. You are water and I am thirst. I saw you looking at the sea that makes you sad. Do not worry, I am here. At night you were always with me. Only with me did you cry. If not me, then who? Love will always be the noise in the wilderness. Tell me what is happening. Your silence wrecks everything. Do not cover feelings with sand.",
    36: "Some people climb mountains. Some jump from heights. Some ride horses. Some swallow distances. I like being at home, with tea and lemon and old books, with the same beloved and the same habits.",
    37: "Same bar, same trouble. I open too easily, and that is where I make the mistake. We threw so many dreams away. You came into my life, and I cannot remember the last time it hurt like this. Let us sit and talk. I will not keep it in. I miss you. You left and the low came over me. I drank to forget the one I love, and I still remember.",
    38: "A mind commando dives into your thoughts. Do not compare me to anyone else. I ride the beat. I am still here. Who told you hip-hop was dead?",
    39: "Where are the days when I felt you on my right, fighting for me, holding my hand? Now I am alone. I cannot tell right from left. I walk bent, about to fall. Father, do not leave me. I am afraid, so come and be with me. Where are the days when my face shone because I saw you around me? Now I hang like a picture. I see no light in front of me.",
    40: "How do I look? Like a million bucks. I came, I saw, I got it, and I told everyone. I put it on and overdid it, and they all said, honey, what a taste. Every flash is on you. A million bucks, all on me. With you beside me, you do not need to ask how I look."
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
