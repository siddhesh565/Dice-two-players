

document.getElementById("refresh").addEventListener("click",handleclick);
function handleclick(){

var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var imageAdr1 = "./images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", imageAdr1);
var imageAdr2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", imageAdr2);
// console.log(randomNumber1);
// console.log(randomNumber2);
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player2 Wins!🚩";
}
else { document.querySelector("h1").textContent = " Draw!"; }

};
