import $ from "jquery";

let buttons = $("#messages button");

const originalTitle = document.title;

function showMessage(id) {
    document.title = document.title + " | " + id;

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

    let attribute, value, duration;
    if (content.hasClass("info")) {
        attribute = "width";
        value = "100%";
        duration = 3200;
    }
    else { 
        attribute = "opacity";
        value = 1;
        duration = 2000;
    }


    content.animate({
        [attribute]: value
    }, duration, () => {
        messageContentAnimation(contents)
    });
}

buttons.on("click", (e) => {
    document.title = originalTitle + "'s SECRET BLOG!";
    let button = $(e.target);
    
    button.animate({"width": 0}, 2000);

    setTimeout(()=> {
        button.remove();
    }, 1500);

    setTimeout(()=> {
        showMessage(e.target.value);
    }, 1000);
});
