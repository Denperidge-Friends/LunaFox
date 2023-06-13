let buttons = document.querySelectorAll("nav button");

function toggleDisplay(id) {
    let elem = document.getElementById(id);
    if (elem.style.display == "block") {
        elem.style.display = "none";
    } else {
        elem.style.display = "block";
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {
        console.log(document.getElementById(e.target.value))
        toggleDisplay(e.target.value);
    });
}