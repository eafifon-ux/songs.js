/* songs-all.js — ONLY file the Blogger post should load.
   Points at @main so new days appear without editing the blog. */
(function () {
  var BASE = 'https://cdn.jsdelivr.net/gh/eafifon-ux/songs.js@main/';
  var files = [
    'songs-q1.js',
    'songs-q1b.js',
    'songs-q1c.js',
    'songs-q1d.js',
    'songs-q1e.js',
    'songs-q1-more.js',
    'songs-q1f.js',
    'songs-q2.js',
    'songs-q2b.js',
    'songs-q2c.js',
    'songs-q3.js',
    'songs-q4.js',
    'songs.js'
  ];
  var i = 0;
  function done() {
    if (typeof window.GPCPaintSongs === 'function') window.GPCPaintSongs();
  }
  function next() {
    if (i >= files.length) { done(); return; }
    var s = document.createElement('script');
    s.src = BASE + files[i++] + '?v=2';
    s.async = false;
    s.onload = next;
    s.onerror = next;
    document.head.appendChild(s);
  }
  next();
})();
