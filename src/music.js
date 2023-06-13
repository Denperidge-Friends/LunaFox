import { Howl, Howler } from "howler";

console.log(song)
let sound = new Howl({
    src: "/" + song + ".mp3",
    autoplay: true
});

document.getElementById("play").addEventListener("click", () => {
    if(sound.playing()) {
        sound.pause();
    } else {
        sound.play();
    }

})
//let sound = new Howl();
