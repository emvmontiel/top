let day = 2
switch (day) {
	case 1:
		console.log("Today is Monday!")
		break;
	case 2:
		console.log("Today is Tuesday!")
		break;
	case 3:
		console.log("Today is Wednesday!")
		break;
	case 4:
		console.log("Today is Thursday!")
		break;
	case 5:
		console.log("Today is Friday!")
		break;
	case 6:
		console.log("Today is Saturday!")
		break;
	case 7:
		console.log("Today is Sunday!")
		break;
	default:
		console.log(`${day} is not a day`)
    }

let expression = "Choco"
switch (expression) {
    case "Vanilla": {
        // Code block to be executed if "Vanilla" matches the expression variable
        console.log(`My favorite flavor is ${expression}!`)
        break;
    }
    case "Chocolate": {
        // Code block to be executed if "Chocolate" matches the expression variable
        console.log(`My favorite flavor is ${expression}!`)       
        break; 
    }
    case "Coffee": {
        // Code block to be executed if "Coffee" matches the expression variable
        console.log(`My favorite flavor is ${expression}!`)  
        break;      
    }
    default:
        console.log("I love ice cream!")
}

// Assignment
// Create a function that accepts an animal sound and logs it to the console

function animalSound() {
	let sound = prompt("What do you hear?")
	console.log(sound)
}

animalSound()