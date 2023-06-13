import { Howl, Howler } from "howler";


let sound = new Howl({
    src: songs,
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
