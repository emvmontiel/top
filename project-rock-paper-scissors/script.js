// To be continued
// Stopped at Step 5 of TOP Project: Rock Paper Scissors

console.log("Let the games begin!");

let humanScore = 0;
let computerScore = 0;

let humanSelection;
let computerSelection;

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
    let x = prompt("🪨📃✂️ SHOOT!");
    x = x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
    console.log("You chose " + x + "!");
    return x;
}

function getNew() {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
}

function playRound(x, y) {
    if (x === y) {
        console.log("It's a tie! You must go again!");
        return "tie";
    } else if ((x === "Rock" && y === "Paper") ||
                (x === "Paper" && y === "Scissors") ||
                (x === "Scissors" && y === "Rock")) {
                    console.log("Congratulations! You win!")
                    humanScore += 1 ;
                    return "human";
                } else {
                    console.log("You lose dumb motherfucker!")
                    computerScore += 1 ;
                    return "computer";
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
   
   function scoreCounter(result) {
       if (result === "tie") {
           console.log("Scores remain the same!")
        } else if (result === "human") {
            console.log("Your score is now " + humanScore + "! While the computer's score is " + computerScore + ".")
        } else {
            console.log("Your score is " + humanScore + "! The computer's score is " + computerScore + "!")
        }
    }

    function playGame() {
        
        getNew();
        let forScore = playRound(computerSelection, humanSelection);
        scoreCounter(forScore);

        getNew();
        forScore = playRound(computerSelection, humanSelection);
        scoreCounter(forScore);

        getNew();
        forScore = playRound(computerSelection, humanSelection);
        scoreCounter(forScore);

        getNew();
        forScore = playRound(computerSelection, humanSelection);
        scoreCounter(forScore);

        getNew();
        forScore = playRound(computerSelection, humanSelection);
        scoreCounter(forScore);

        if (humanScore === computerScore) {
            console.log("Game has ended. It's a tie. Everyone wins!");
        } else if (humanScore > computerScore) {
            console.log("You win the game! Go get a drink and celebrate!");
        } else {
            console.log("Computer wins LOL you suck!")
        }
    }

    playGame();