let buttons = document.querySelectorAll("nav button");

const originalTitle = document.title;

function toggleDisplay(id) {
    let elem = document.getElementById(id);
    if (elem.style.display == "block") {
        elem.style.display = "none";
        document.title = originalTitle;
    } else {
        elem.style.display = "block";
        document.title = "LUNAFOX('s secret blog!)!!"
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {
        toggleDisplay(e.target.value);
    });
}