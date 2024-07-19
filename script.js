const choices = ['rock', 'paper', 'scissor'];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a Tie !";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissor") ? "You Win!" : "You Lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win!" : "You Lose!";
                break;
            case "scissor":
                result = (computerChoice === "paper") ? "You Win!" : "You Lose!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;


    resultDisplay.classList.remove("greentext", "redtext", "yellowtext");

    switch (result) {
        case "You Win!":
            resultDisplay.classList.add("greentext");
            break;
        case "You Lose!":
            resultDisplay.classList.add("redtext");
            break;
        case "It's a Tie !":
            resultDisplay.classList.add("yellowtext");
            break;
    }
}
