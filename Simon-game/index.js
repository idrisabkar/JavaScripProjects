var buttonColours = ["red", "blue", "green", "white"];
var userClickedPattern = []
var gamePattern = [];
var level = 0
var started = false

function startGame() {
    $(document).keydown(function (e) { 
        if(!started && e.key == "a"){
            nextSequence()
            started = true
            $("h1").text("Level : " + level)
        }
    });
}

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

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length) {
        userClickedPattern = [];
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
     $("body").addClass("gameOver")
     playSound("sounds/wrong.mp3");
     setTimeout(() => {
        $("body").removeClass("gameOver")
     }, 500);
        
     gameOver()
    }
}

function gameOver(){
    $("h1").text("Game Over, Press A to Restart")
    level = 0
    gamePattern = []
    started = false   
}

$(document).ready(function () {
 startGame()
});