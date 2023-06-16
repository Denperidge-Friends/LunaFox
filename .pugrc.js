// Import wasn't supported
const fs = require("fs");

const dir = "assets/";

let filenames = fs.readdirSync(dir);
            let songs = [];
            filenames.forEach((filename) => {
                if (filename.endsWith("mp3")) {
                    songs.push(filename)
                }
            });

            console.log("AAAAAAAAA")
            console.log("<script>let songs = " + JSON.stringify(songs) + ";</script>")

module.exports = {
    locals: {
        songs: songs,
        string: JSON.stringify(songs),
        elem: "<script>let songs = " + JSON.stringify(songs) + ";</script>"
    },
    filters: {
        songs: function (text, options) {
            let filenames = fs.readdirSync(dir);
            let songs = [];
            filenames.forEach((filename) => {
                if (filename.endsWith("mp3")) {
                    songs.push(filename)
                }
            });

            console.log("AAAAAAAAA")
            console.log("<script>let songs = " + JSON.stringify(songs) + ";</script>")

            return "<script>let songs = " + JSON.stringify(songs) + ";</script>";
        }
    }
}
