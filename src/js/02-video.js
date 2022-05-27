import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const setCurrentTime = localStorage.getItem("videoplayer-current-time")

player.setCurrentTime(setCurrentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
})



player.on('timeupdate', throttle(onCurrentTime , 1000) );

function onCurrentTime(e) {
   localStorage.setItem("videoplayer-current-time" , e.seconds)
}