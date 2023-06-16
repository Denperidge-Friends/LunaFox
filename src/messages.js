
let buttons = document.querySelectorAll("#messages button");

const originalTitle = document.title;

function delayedValue(elem, attribute, value, delay=100) {
    setTimeout(() => {
        elem.style[attribute] = value;
    }, delay);
}

function showMessage(id) {
    let elem = document.getElementById(id);
    elem.style.display = "block";

    elem.classList.add("animate__zoomIn");
    /*
    if (elem.style.display == "block") {
        elem.style.opacity = 0;
        delayedValue(elem, "display", "none", 2000);
        document.title = originalTitle;
    } else {
        elem.style.display = "block";
        delayedValue(elem, "opacity", 1);
        document.title = "LUNAFOX('s secret blog!)!!"
    }*/
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {
        let button = e.target;
        button.classList
        button.className = ("animate__animated animate__fadeOutDown");
        setTimeout(()=> {
            button.remove();
        }, 500);
        showMessage(e.target.value);
    });
}