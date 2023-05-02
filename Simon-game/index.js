var buttonColours = ["red", "blue", "green", "white"];
var userClickedPattern = []
var gamePattern = [];

function nextSequence() {

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


$(".square").click(function (e) { 
    var button = $(e.target)
    var userChosenColour = button.attr("id") 
    userClickedPattern.push(userChosenColour)
    console.log(userClickedPattern)
    playSound("sounds/" + userChosenColour + ".mp3")
    
});