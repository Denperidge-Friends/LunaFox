import $ from "jquery";

let buttons = $("#messages button");

const originalTitle = document.title;

function delayedValue(elem, attribute, value, delay=100) {
    setTimeout(() => {
        elem.style[attribute] = value;
    }, delay);
}

function showMessage(id) {
    $(".message").css("display", "none");

    //$(`#${id} *`).addClass("typewriter")

    $("#" + id).css("display", "block").animate({
        opacity: 1
    }, 2000);




    let contents = $("#" + id + " *");
    contents.addClass("typewriter")
    
    iterateContentTypewriter(contents.toArray());
}

function iterateContentTypewriter(contents) {
    let content = contents.shift();
    if(!content) return;
    let duration = 4000;

    $(content).animate({
        width: "100%"
    }, duration, () => {
        iterateContentTypewriter(contents)
    });


    setTimeout(() => {
    }, duration);

}

buttons.each((i, button) => {
    $(button).on("click", (e) => {
        let button = $(e.target);
        
        button.animate({"width": 0}, 2000);

        setTimeout(()=> {
            button.remove();
        }, 1500);

        setTimeout(()=> {
            showMessage(e.target.value);
        }, 1000);

    });
});
