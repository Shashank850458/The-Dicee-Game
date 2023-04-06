var randomNumber1=Math.floor(Math.random()*6)+1;//1-6
var randomDiceImage1= "Dice" + randomNumber1 + ".png"; //Dice1.png-Dice6.png;
var randomImageSource1="images/"+randomDiceImage1; //Images/Dice1.png-Images/Dice6.png;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2="images/Dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//if Player1 Wins
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player1 Wins!";
}
//if Player2 Wins
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player2 Wins! 🚩";
}
//if Draw
else{
    document.querySelector("h1").innerHTML="Draw!";
}
