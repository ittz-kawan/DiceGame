var randomNaumber1=Math.floor(Math.random()*6);
randomNaumber1+=1;
if(randomNaumber1===1){
    document.getElementById("img1").src="dice1.png";
}
else if(randomNaumber1===2){
    document.getElementById("img1").src="dice2.png";
}
else if(randomNaumber1===3){
    document.getElementById("img1").src="dice2.png";
}
else if(randomNaumber1===4){
    document.getElementById("img1").src="dice4.png";
}
else if(randomNaumber1===5){
    document.getElementById("img1").src="dice5.png";
}
var randomNumber2=Math.floor(Math.random()*6);
randomNumber2+=1;
if(randomNumber2===1){
    document.getElementById("img2").src="dice1.png";

}
else if(randomNumber2===2){
    document.getElementById("img2").src="dice2.png";
}
else if(randomNumber2===3){
    document.getElementById("img2").src="dice3.png";
}
else if(randomNumber2===4){
    document.getElementById("img2").src="dice4.png";
}
else if(randomNumber2===5){
    document.getElementById("img2").src="dice5.png";
}


if(randomNaumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Win!";

}
else if(randomNaumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 Win!";

}
else if(randomNaumber1===randomNumber2){
    document.querySelector("h1").innerHTML="The Game Finishes in the Tie";

}
