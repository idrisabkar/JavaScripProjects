$(document).ready(function () {
    var buttonColours = ["red", "blue", "green", "white"];
var userClickedPattern = []
var gamePattern = [];
var level = 0
var started = false

function nextSequence() {
  userClickedPattern = [];
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
    playSound("sounds/" + userChosenColour + ".mp3")
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length - 1)
});

$(document).keydown(function (e) { 
    if(!started){
        nextSequence()
        started = true
        $("h1").text("Level : " + level)
    }
});


function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success")
      if (userClickedPattern.length === gamePattern.length) {
        userClickedPattern = [];
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
     console.log("wrong")
    }
}

});