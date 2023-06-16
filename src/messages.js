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

    $("#" + id).css("display", "block").animate({
        opacity: 1
    }, 2000);




    const info = $("#" + id + " .info")
    info.addClass("typewriter");

    let contents = $("#" + id + " *");
    
    messageContentAnimation(contents.toArray());
}

function messageContentAnimation(contents) {
    let content = contents.shift();
    if(!content) return;

    content = $(content);

    console.log(content)

    let attribute, value, duration;
    [ attribute, value ] = content.hasClass("info") ? [ "width", "100%", 3200 ] : [ "opacity", 1, 2000 ];
    console.log(attribute, value, duration)

    duration = Array.from(content.text()).length * 100;

    content.animate({
        [attribute]: value
    }, duration, () => {
        messageContentAnimation(contents)
    });
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
