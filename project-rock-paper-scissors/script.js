console.log("Let the games begin!");

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";
let x;
let y = Math.floor(Math.random() * 9) + 1
    if (y >= 1 && y <= 3) {
        x = rock;
        console.log("Computer says " + x + "!");
        return x;
    } else if (y >= 4 && y <= 6) {
        x = paper;
        console.log("Computer says " + x + "!");
        return x;
    } else if (y >= 7 && y <= 9) {
        x = scissors;
        console.log("Computer says " + x + "!");
        return x;
    } else {
        console.log("I am working!");
    }
}

function getHumanChoice() {
    let x = prompt("🪨📃✂️ SHOOT!");
    x = x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
    console.log("You chose " + x + "!");
    return x;
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playRound(x, y) {
    if (x === y) {
        console.log("It's a tie! You must go again!");
    } else if (
        (x === "Rock" && y === "Paper") ||
        (x === "Paper" && y === "Scissors") ||
        (x === "Scissors" && y === "Rock")) {
            console.log("Congratulations! You win!")
            humanScore += 1 ;
        } else {
            console.log("You lose dumb motherfucker!")
            computerScore += 1 ;
    }
}

/* 
    Jan 19 2026
    There are a lot of takeaways for this project. It's worth noting that this took me such a long time to complete and 
    I couldn't have done it without the help of AI. It made me question a lot of things including my ability to handle
    logic because most of the logic in this program (like on line 29) was the work of Google Gemini, now, I don't know if 
    that's a good thing, if it's all normal to use AI that way, all I know is that it will take some time for me to get
    accustomed to this—to be able to find an appropriate and logical solution to a technical challenge all on my own.
 */

function playGame() {
    playRound(computerSelection, humanSelection)
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        console.log("Your score is " + humanScore + "!")
        console.log("The computer's score is " + computerScore + "!")
    playRound(computerSelection, humanSelection)
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        console.log("Your score is " + humanScore + "!")
        console.log("The computer's score is " + computerScore + "!")
    playRound(computerSelection, humanSelection)
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        console.log("Your score is " + humanScore + "!")
        console.log("The computer's score is " + computerScore + "!")
    playRound(computerSelection, humanSelection)
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        console.log("Your score is " + humanScore + "!")
        console.log("The computer's score is " + computerScore + "!")
    playRound(computerSelection, humanSelection)
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        console.log("Your score is " + humanScore + "!")
        console.log("The computer's score is " + computerScore + "!")
}

playGame()