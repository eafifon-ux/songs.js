/* Drop this dayUrlMap over the Tao/Meditations map
   on https://www.gpc364.com/2025/12/calendar_95.html

   After you publish the Song of the Day Blogger post, put that URL here.
*/
const SONG_PAGE = "https://www.gpc364.com/2026/09/song-of-the-day.html?m=1";
const dayUrlMap = {};
for (let day = 1; day <= 364; day++) {
  dayUrlMap[day] = SONG_PAGE + "#day" + day;
}
