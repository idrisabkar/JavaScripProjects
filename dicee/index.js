var header = document.getElementsByTagName("h1")[0];
var dicee_image1 = document.getElementsByTagName("img")[0];
var dicee_image2 = document.getElementsByTagName("img")[1];

var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;

var source1 = "./images/dice" + player1 + ".png";
var source2 = "./images/dice" + player2 + ".png";

dicee_image1.setAttribute("src", source1);
dicee_image2.setAttribute("src", source2);

if(player1 > player2){
    header.textContent = "🚩Player 1 Won"
}
else if (player1 < player2){
    header.textContent = "Player 2 Won🚩"
}else{
    header.textContent = "Draw Match"
}