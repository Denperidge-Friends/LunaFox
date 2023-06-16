import { Howl } from "howler";
import $ from "jquery";

const play = $("#play");
const volume = $("#volume");
const nowPlaying = $("#nowPlaying");
const songName = $("#songName");


let sound;

function random(min, max) {
    // See https://www.w3schools.com/JS/js_random.asp
    return Math.floor(Math.random() * (max - min) ) + min;
}

let songIndex = random(0, songs.length);


// Playlist functionality based on https://github.com/goldfire/howler.js/issues/191
function playSong() {
    if (songIndex >= songs.length) {
        songIndex = 0;
    } else if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    let file = songs[songIndex];
    let artist = file.substring(0, file.indexOf("-") - 1)
    let track = file.substring(file.indexOf("-") + 1, file.lastIndexOf("."))

    songName.text(`${track} by ${artist}`);
    nowPlaying.attr("title", file);

    return new Howl({
        src: file,
        autoplay: true,
        volume: volume.val() / 100,
        onplay: () => {
            play.text("pause");
        },
        onpause: () => {
            play.text("play");
        },
        onend: nextSong
    });
}

function nextSong() {
    songIndex++;
    sound.unload();
    sound = playSong();
}

function prevSong() {
    songIndex--;
    sound.unload();
    sound = playSong();
}


volume.on("change", (event) => {
    sound.volume(event.target.value/100);
});

play.on("click", () => {
    if(sound.playing()) {
        sound.pause();
    } else {
        sound.play();
    }
});

$("#prev").on("click", prevSong);
$("#next").on("click", nextSong);

sound = playSong();
