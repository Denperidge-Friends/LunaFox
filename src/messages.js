import $ from "jquery";

const originalTitle = document.title;
let messageButtons = $("#messages button");

let openMessage;

function showMessage(id) {
    document.title = document.title + " | " + id;

    if (openMessage) {
        openMessage.remove();
    }

    openMessage = $("#" + id);

    openMessage.css("display", "block").animate({
        opacity: 1
    }, 2000);

    const info = openMessage.children(".info")
    info.addClass("typewriter");

    let allMessageContent = openMessage.children("*");
    
    messageContentAnimation(allMessageContent.toArray());
}

function messageContentAnimation(messageContent) {
    let content = messageContent.shift();
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
        messageContentAnimation(messageContent)
    });
}

messageButtons.on("click", (e) => {
    document.title = originalTitle + "'s SECRET BLOG!";
    let button = $(e.target);
    
    button.animate({"width": 0}, 2000);

    setTimeout(()=> {
        button.remove();
        // Have to requery, otherwise length remains 2
        if ($("#messages button").length <= 0) { 
            $("#messages").remove();
        }
    }, 1500);

    setTimeout(()=> {
        showMessage(e.target.value);
    }, 1000);
});
