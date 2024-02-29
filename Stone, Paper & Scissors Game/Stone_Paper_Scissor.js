let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"]
}

const playGame = () => {
    console.log("user choice = ", userChoice); 
}

choices.forEach ((choice) => {
    choice.addEventListener("click",() => {
        console.log("choice was clicked");
        playGame(userChoice);
    })
}) 