var buttonColours = ["red", "blue", "green", "white"];
var userClickedPattern = []
var gamePattern = [];
var level = 0
var started = false

function nextSequence() {
level++
  $("h1").text("Level : " + level)
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound("sounds/" + randomChosenColour + ".mp3")
  
  
}
function playSound(sound){
    var audio = new Audio(sound);
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("clicked");
    setTimeout(() => {
        $("#" + currentColour).removeClass("clicked");
    }, 100);
}
$(".square").click(function (e) { 
    var button = $(e.target)
    var userChosenColour = button.attr("id") 
    userClickedPattern.push(userChosenColour)
    console.log(userClickedPattern)
    playSound("sounds/" + userChosenColour + ".mp3")
    animatePress(userChosenColour)
});

$(document).keydown(function (e) { 
    if(!started){
        nextSequence()
        started = true
        $("h1").text("Level : " + level)
    }
});