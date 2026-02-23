// Feb 16 2026 16:21 
// Feb 19 2026 17:27

// console.log("HEllo wowrld!")

function getComputerChoice() {
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";
    let x;
    let y = Math.floor(Math.random() * 9) + 1;
    
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
    // let x = prompt("🪨📃✂️ SHOOT!");
    // console.log("You chose " + x + "!");
    // return x;
    let x = prompt("Choose between rock, paper, scissors. Please type your answer in the box.");
    x = x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
    console.log("Human says " + x + "!");
    return x;
}

// getComputerChoice();
// getHumanChoice();

let humanScore = 0;
let computerScore = 0;

// humanChoice and computerChoice must be arguments for the function name playRound

function playGame() {
    function playRound(humanChoice, computerChoice) {
    
    // Feb 23 2026 17:24
    if (humanChoice === computerChoice) {
        console.log("It's a tie! You must go again!");
        return "tie";
    } else if ((humanChoice === "Rock" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Rock")) {
        console.log("Congratulations! You lose!")
        computerScore += 1 ;
        return "computer";
    } else {
        console.log("You win!")
        humanScore += 1 ;
        return "human";
    }
}

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)

}

playGame()

// Kulang score count