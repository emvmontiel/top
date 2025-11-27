// console.log("Hello World")

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
let x = Math.floor(Math.random() * 9) + 1
console.log(x)
    if (x >= 1 && x <= 3) {
        console.log("rock");
    } else if (x >= 4 && x <= 6) {
        console.log("paper");
    } else if (x >= 7 && x <= 9) {
        console.log("scissors");
    } else {
        console.log("I am working!");
    }
}

// rock        > 1 - 3
// paper       > 4 - 6
// scissors    > 7 - 9

// Switch-case works but if statements have fewer lines of code
// switch (x) {
//     case x = 1:
//     case x = 2:
//     case x = 3: 
//         console.log("rock")
//         break
//     case (x = 4):
//     case (x = 5):
//     case (x = 6):
//         console.log("paper")
//         break
//     case (x = 7):
//     case (x = 8):
//     case (x = 9):
//         console.log("scissors")
//         break
//     default:
//         console.log("I am working!")
// }

// I couldn't make the if statements work on my own
// Code above is from Gemini
// I think the problem was because of the order of the equality signs; sometimes I put = before the < or >

function getHumanChoice() {
    let x = prompt("🪨📃✂️ SHOOT!")
    console.log(x)
}

getComputerChoice()
getHumanChoice()

function playRound(humanChoice, computerChoice) {
    let caseIns = String(humanChoice)
    caseIns = humanChoice.toL

    switch (humanChoice, computerChoice) {
        case humanChoice = "rock":
        case computerChoice = "paper":
            console.log("Computer loses")
            break
    }
}

playRound()
// How .toLowerCase() function works
// let str = "whAT"
// let lower = str.toLowerCase()
// console.log(lower) 

function playGame() {}