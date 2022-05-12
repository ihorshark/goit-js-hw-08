import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = "videoplayer-current-time";

player.on('play', function() {
    console.log('played the video!');
});

const onPlay = ({ seconds }) => localStorage.setItem(CURRENT_TIME, seconds);

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = localStorage.getItem(CURRENT_TIME);

if (currentTime) {
    player.setCurrentTime(currentTime);    
}