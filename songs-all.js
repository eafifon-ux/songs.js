/* songs-all.js — one load of the base snapshot, then all lyric patches */
(function () {
  function set(root, key, fields) {
    if (!root) return;
    var n = String(key).padStart(3, "0");
    var d = root[n] || root[key] || {};
    for (var k in fields) if (Object.prototype.hasOwnProperty.call(fields, k)) d[k] = fields[k];
    root[n] = d;
    root[Number(n)] = d;
  }
  function patch() {
    var roots = [window.GPC_SONGS, window.SONGS, window.SONGS_Q1, window.SONGS_Q2, window.SONGS_Q3, window.SONGS_Q4];
    roots.forEach(function (root) {
      if (!root) return;
      set(root, 1, {"heLyricsEn":"Dear Mommy, Dear Papa. It does not matter what the ethnic group is. The main thing is the dance.","hiLyricsEn":"Embrace me, dear — who knows if this beautiful night will come again."});
      set(root, 2, {"heLyricsEn":"You say, No more games. Packing a bagful of clothes and going back to your parents.","hiLyricsEn":"Every moment you are close to my heart. You say that life is a sweet thirst.","hiLyricsHi":"पल पल दिल के पास तुम रहते हो"});
      set(root, 3, {"heLyricsEn":"What I asked for... that you tell me that you love me.","hiLyricsEn":"I cannot live without you. If you are not here, nothing else matters.","hiLyricsHi":"तेरे बिना जीना नहि"});
      set(root, 4, {"heLyricsEn":"I came from the East. I traveled a long way. For years I dreamed of a land.","hiLyricsEn":"Now that you have stolen my heart, do not turn your eyes away.","hiLyricsHi":"चुरा लिया है तुमने जो दिल को"});
      set(root, 5, {"heLyricsEn":"Without you I am half mad. Let me breathe you in again for a minute.","hiLyricsEn":"Sometimes a thought comes to my heart that you were made for me.","hiLyricsHi":"कभी कभी मेरे दिल में ख़याल आता है"});
      set(root, 6, {"heLyricsEn":"Hey mami, this is not allowed. If they catch us, I am done.","hiLyricsEn":"No Hindi lyrics link on this day."});
      set(root, 7, {"heLyricsEn":"Never alone. There is one who understands when the heart is broken.","hiLyricsEn":"It is a song of love, the flow of waves. Life is nothing else but our story.","hiLyricsHi":"एक प्यार का नगमा है"});
      set(root, 8, {"heLyricsEn":"On the paths of Tel Aviv she looks for a place. She wants to fly to Mexico.","hiLyricsEn":"What is life without you? Nights are dull without you, my love."});
      set(root, 9, {"heLyricsEn":"With you, and always with you at night. I want to love only you until morning shines on you.","hiLyricsEn":"If we know each other, living would be easy. Do not look away. Tell me your name.","hiLyricsHi":"जान पहचान हो"});
      set(root, 10, {"heLyricsEn":"Dad, at night a moment slips in that no one hears. I feel you close and cannot touch you.","hiLyricsEn":"This lively evening intoxicates me. A string pulls me toward you.","hiLyricsHi":"ये शाम मस्तानी"});
      set(root, 11, {"heLyricsEn":"No Hebrew lyrics link on this day.","hiLyricsEn":"Live every moment fully. This moment may not be there tomorrow.","hiLyricsHi":"कल हो ना हो"});
      set(root, 12, {"heLyricsEn":"For your sake I will suffer every day. I am not going anywhere.","hiLyricsEn":"I see God in you. You are my heaven, and the peace of my soul.","hiLyricsHi":"तुझ में रब दिखता है"});
      set(root, 13, {"heLyricsEn":"You say all the time that in the end it falls apart. You do not see me the way I see you.","hiLyricsEn":"With you there is love and restlessness. Without you I cannot live.","hiLyricsHi":"पी लूँ"});
      set(root, 14, {"heLyricsEn":"Your mother always says there is no one like you. I love you, and that is why I am with you.","hiLyricsEn":"The heart is crazy. It makes you meet someone, then lights a fire in the chest.","hiLyricsHi":"दिल तो पागल है"});
      set(root, 15, {"heLyricsEn":"No Hebrew lyrics page on the stored link.","hiLyricsEn":"If you are with me, let this heart be mended. Every sorrow would slip away.","hiLyricsHi":"अगर तुम साथ हो"});
      set(root, 16, {"heLyricsEn":"Just do not break my heart. Hold me tight, then move on. I still love you.","hiLyricsEn":"There is some bond with you. You are my companion, so why should I worry?","hiLyricsHi":"कुछ तो है तुझसे राब्ता"});
      set(root, 17, {"heLyricsEn":"A little girl in a big world. My heart is breaking, dear Father. Do not leave me.","hiLyricsEn":"I saw you and learned that love is crazy. Now where do I go from here?","hiLyricsHi":"तुझे देखा तो ये जाना सनम"});
      set(root, 18, {"heLyricsEn":"Father in heaven, keep my soul. Do not let me fail, and do not let me fall.","hiLyricsEn":"How did it happen? How did you become so necessary?","hiLyricsHi":"कैसे हुआ"});
      set(root, 19, {"heLyricsEn":"No Hebrew lyrics page on the stored link.","hiLyricsEn":"I am a little traveler, a soldier of my country. I will keep walking forward.","hiLyricsHi":"नन्हा मुन्ना राही हूँ"});
      set(root, 20, {"heLyricsEn":"Come give me a sign. I have no air left. Only you can come and mend this.","hiLyricsEn":"Ask how I am. Without you, one day feels like a hundred years.","hiLyricsHi":"ख़ैरियत पूछो"});
      set(root, 21, {"heLyricsEn":"No Hebrew lyrics link on this day.","hiLyricsEn":"No Hindi lyrics link on this day."});
      set(root, 22, {"heLyricsEn":"No Hebrew lyrics link on this day.","hiLyricsEn":"No Hindi lyrics link on this day."});
      set(root, 23, {"heLyricsEn":"No Hebrew lyrics link on this day.","hiLyricsEn":"No Hindi lyrics link on this day."});
      set(root, 24, {"heLyricsEn":"No Hebrew lyrics link on this day.","hiLyricsEn":"No Hindi lyrics link on this day."});
      set(root, 25, {"heLyricsEn":"No Hebrew lyrics link on this day.","hiLyricsEn":"No Hindi lyrics link on this day."});
      set(root, 26, {"heLyricsEn":"No Hebrew lyrics link on this day.","hiLyricsEn":"No Hindi lyrics link on this day."});
      set(root, 27, {"heLyricsEn":"No Hebrew lyrics link on this day.","hiLyricsEn":"No Hindi lyrics link on this day."});
      set(root, 28, {"heLyricsEn":"No Hebrew lyrics link on this day.","hiLyricsEn":"No Hindi lyrics link on this day."});
      set(root, 29, {"heLyricsEn":"No Hebrew lyrics link on this day.","hiLyricsEn":"No Hindi lyrics link on this day."});
      set(root, 30, {"heLyricsEn":"No Hebrew lyrics link on this day.","hiLyricsEn":"No Hindi lyrics link on this day."});
      set(root, 31, {"heLyricsEn":"No Hebrew lyrics link on this day.","hiLyricsEn":"No Hindi lyrics link on this day."});
      set(root, 32, {"heLyricsEn":"I do not care what they say about me. They are talking. What do they know about me?","hiLyricsEn":"Look, the distance is gone. I am here. I am the voice of your heart.","hiLyricsHi":"मैं यहाँ हूँ"});
      set(root, 33, {"heLyricsEn":"Hang up. I want nothing from you. And you are still here.","hiLyricsEn":"No Hindi lyrics link on this day."});
      set(root, 34, {"heLyricsEn":"By the sea I remember you. They say a closed door is not opened again.","hiLyricsEn":"Your beauty is intoxicating, and my love is mad. I am afraid we may make a mistake.","hiLyricsHi":"रूप तेरा मस्ताना"});
      set(root, 35, {"heLyricsEn":"At night you were always with me. Do not worry. I am here.","hiLyricsEn":"If a spark ignites, the rain can put it out. But a fire lit by the rain, who can put that out?","hiLyricsHi":"चिंगारी कोई भड़के"});
      set(root, 36, {"heLyricsEn":"Some people climb mountains. I like being at home, with tea, lemon, and old books.","hiLyricsEn":"I am Laila. Everyone wants to meet me alone. Whoever I look at forgets the world.","hiLyricsHi":"लैला मैं लैला"});
      set(root, 37, {"heLyricsEn":"Let us sit and talk. I will not keep it in anymore. I miss you.","hiLyricsEn":"No Hindi lyrics link on this day."});
      set(root, 38, {"heLyricsEn":"Mind commando dives into your thoughts. Do not compare me to anyone else.","hiLyricsEn":"Spring, shower flowers. My beloved has come.","hiLyricsHi":"बहारों फूल बरसाओ"});
      set(root, 146, {"quoteHi":"चिंता नकारात्मक लक्ष्य निर्धारण है।","quoteHe":"דאגה היא הגדרת יעדים שלילית."});
      set(root, 198, {"quoteEn":"It is better to create than to learn! Creation is the essence of life.","quoteHi":"सीखने से बेहतर है कि आप कुछ रचें! सृजन जीवन का सार है।","quoteHe":"עדיף ליצור מאשר ללמוד! היצירה היא מהות החיים.","cite":"Julius Caesar","quoteBy":"Julius Caesar","author":"Julius Caesar"});
    });
    if (typeof window.GPCPaintSongs === "function") window.GPCPaintSongs();
  }
  function tick(n) {
    if (window.GPC_SONGS || window.SONGS) patch();
    if (n < 50) setTimeout(function () { tick(n + 1); }, 200);
  }
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@46fda45454884a70f3e7517a4774149a41b33990/songs-all.js";
  s.onload = function () { tick(0); };
  s.onerror = function () { tick(0); };
  document.head.appendChild(s);
  tick(0);
})();
