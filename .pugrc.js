// Import wasn't supported
const fs = require("fs");

const postsDir = "src/posts/";

function linkToPost(filename) {
    let href = filename.replace("src/", "");
    let name = filename.replace(".pug", "");

    return `<li><a href="/src/posts/${href}">${name}</a></li>`;
}

module.exports = {
    basedir: "src/",  // Imports from / direct to root
    filters: {
        posts: function () {
            let filenames = fs.readdirSync(postsDir);
            let html = "";
            filenames.forEach((filename) => {
                html += linkToPost(filename);
            })
            return html;
        }
    }
}
