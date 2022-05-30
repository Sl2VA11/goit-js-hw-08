import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const setCurrentTime = localStorage.getItem("videoplayer-current-time")

player.setCurrentTime(setCurrentTime).then(function(seconds) {
    
}).catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });



player.on('timeupdate', throttle(onCurrentTime , 1000) );

function onCurrentTime(e) {
   localStorage.setItem("videoplayer-current-time" , e.seconds)
}