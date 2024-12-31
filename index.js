
let player1 = Math.floor(Math.random()*6)+1;
let player2 = Math.floor(Math.random()*6)+1; 

document.querySelector("div .img1").setAttribute("src", "./images/dice" + player1 + ".png");
document.querySelector("div .img2").setAttribute("src", "./images/dice" + player2 + ".png");

if(player1>player2)
{
    document.querySelector("h1").textContent="🏳️ Palyer 1 won the game";
}
else if (player1<player2) {
    document.querySelector("h1").textContent="Palyer 2 won the game 🏳️";

    
} else {
    document.querySelector("h1").textContent="Draw";
    
}
