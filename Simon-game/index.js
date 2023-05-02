function randButton(){
    const buttons = ["red","green","blue","white"]
    const randomIndex = Math.floor(Math.random() * buttons.length);
    const randomElement = buttons[randomIndex];
    return randomElement
}

var clickedButtons = [];

$(".square").click(function (e) { 
    var button = $(e.target);
    var id = button.attr("id");
    const audio = new Audio("./sounds/" + id + ".mp3");
    audio.play()
    button.addClass("clicked");
    setTimeout(() => {
        button.removeClass("clicked");
    }, 20);
    
    console.log(id);
    if(clickedButtons.length != 0){
        console.log(clickedButtons[0].attr("id"));
    }
});
$(document).keydown(function (e) { 
    if(e.key == "a"){ 
       $("h1").text("Level 1");
        var button = $("." + randButton());
        button.click();
        clickedButtons.push(button);
    }
});