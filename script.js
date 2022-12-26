// define the variables that will keep track of our values
let min = 0
let max = 10
const answer = 8

// target elements by id
const button = document.getElementById("guessButton")
const textTarget = document.getElementById("textTarget")

const printInput = () => {
	let input = document.getElementById("userInput").value // we capture the user input
	const userInput = parseInt(input, 10) // we make sure the user input is an integer

	if (userInput === answer) {
		const text = document.createTextNode("Good Work! The answer is correct!")
		textTarget.innerHTML = " "
		textTarget.appendChild(text)
	} else if (userInput < answer) {
		min = userInput + 1
		const text = document.createTextNode(`Not matched! The correct number is bigger than ${userInput} and is between ${min} and ${max}!`)
		textTarget.innerHTML = " "
		textTarget.appendChild(text)
	} else if (userInput > answer) {
		max = userInput - 1
		const text = document.createTextNode(`Not matched! The correct number is smaller than ${userInput} and is between ${min} and ${max}!`)
		textTarget.innerHTML = " "
		textTarget.appendChild(text)
	} else {
		const text = document.createTextNode(`It's not a number!`)
		textTarget.innerHTML = " "
		textTarget.appendChild(text)
	}

	document.getElementById("userInput").value = " "
}

document.querySelector("input").addEventListener("keydown", e => e.key === "Enter" && printInput())
button.addEventListener("click", printInput)
