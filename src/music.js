import { Howl, Howler } from "howler";

const play = document.getElementById("play");
const volume = document.getElementById("volume");

let sound = new Howl({
    src: songs,
    autoplay: true,
    volume: volume.value / 100,
    loop: true,
    onplay: () => {
        play.innerText = "pause"
    },
    onpause: () => {
        play.innerText = "play"
    }
});

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

