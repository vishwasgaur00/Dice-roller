
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomDiceimg = "dice" + randomNumber1 + ".png";
let randomImagesrc = "images/" + randomDiceimg;

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagesrc);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImagesrc2 = "images/dice" + randomNumber2 + ".png";

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImagesrc2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Won";
    
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Won";
}
else{
    document.querySelector("h1").innerHTML = "DRAW";
}
