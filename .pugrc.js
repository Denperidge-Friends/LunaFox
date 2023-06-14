// Import wasn't supported
const fs = require("fs");

const dir = "assets/";

module.exports = {
    filters: {
        songs: function () {
            let filenames = fs.readdirSync(dir);
            let songs = [];
            filenames.forEach((filename) => {
                if (filename.endsWith("mp3")) {
                    songs.push(filename)
                }
            });

            return "let songs = " + JSON.stringify(songs) + ";";
        }
    }
}
