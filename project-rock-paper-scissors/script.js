// console.log("Hello World")

function getComputerChoice() {
    const x = Math.floor(Math.random() * 9) + 1
    console.log(x)
    if (x <= 3) {
        return "🪨";
    } else if (x => 4 && x <= 6) {
        return "📃"
    } else {
        return "✂️"
    }
}

console.log(getComputerChoice())