document.querySelector("h1").style.color = "blue";

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomImageSource = "images/" + randomDiceImage;

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
  
function winner1(){
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    }
}
winner1();

function winner2() {
    if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 wins!";
    }
}
winner2();

function draw() {
    if (randomNumber1 == randomNumber2) {
        document.querySelector("h1").innerHTML = "It's a draw!";
    }
}
draw();

//refresh the page to roll the dice
let button = document.getElementById("btn");
    button.addEventListener("click", function()
    {
        location.reload(true);
    })

 