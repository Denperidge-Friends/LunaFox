// Import wasn't supported
const fs = require("fs");

const dir = "assets/";

let filenames = fs.readdirSync(dir);
let songs = [];
filenames.forEach((filename) => {
    if (filename.endsWith("mp3")) {
        songs.push(filename);
    }
});

 
module.exports = {
    locals: {
        songs: songs
    },
}
