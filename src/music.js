import { Howl } from "howler";

const play = document.getElementById("play");
const volume = document.getElementById("volume");

let songIndex = -1;

// Playlist functionality based on https://github.com/goldfire/howler.js/issues/191
function nextSong() {
    songIndex++;
    if (songIndex >= songs.length) {
        songIndex = 0;
    }

    return new Howl({
        src: songs[songIndex],
        autoplay: true,
        volume: volume.value / 100,
        onplay: () => {
            play.innerText = "pause"
        },
        onpause: () => {
            play.innerText = "play"
        },
        onend: nextSong
    });
}
let sound = nextSong();

volume.addEventListener("change", (event) => {
    sound.volume(event.target.value/100);
});

document.getElementById("play").addEventListener("click", () => {
    if(sound.playing()) {
        sound.pause();
    } else {
        sound.play();
    }
});

document.getElementById("next").addEventListener("click", () => { 
    sound.unload();
    sound = nextSong();
});