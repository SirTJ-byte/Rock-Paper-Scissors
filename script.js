const inputField = document.getElementById("fieldInput");
const play = document.getElementById("play");
const resultsOfGame = document.getElementById("EachGameResult");
const finalResult = document.getElementById("finalResult");
const reset = document.getElementsByClassName("restart");
const selection = document.getElementById("invalidSelection");

const player = document.querySelector(".playerScore span");
const computer = document.querySelector(".computerScore span");

let array = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

function computersChoice() {
	const computerRandomChoice = Math.floor(Math.random() * array.length);
	const computerChooses = array[computerRandomChoice];
	return computerChooses;
}

function playGame() {
	if (playerScore >= 3 || computerScore >= 3) {
		if (playerScore > computerScore) {
			finalResult.textContent = `current Score : Player ${playerScore} vs Computer${computerScore} Congrats, You Win`;
		} else if (playerScore < computerScore) {
			finalResult.textContent = `current Score : Player ${playerScore} vs Computer${computerScore} Sorry, Computer Won`;
		}

		console.log("\n --- Final results ---");
		console.log(
			`Final Score: Player ${playerScore} vs Computer ${computerScore}`
		);
		return;
	}

	let playerChoice = inputField.value.toLowerCase().trim();
	if (array.includes(playerChoice)) {
		selection.textContent = "";
	} else {
		selection.textContent =
			"invalid choice!!! Please Choose Rock, Paper and Scissors";
		return;
	}

	const computerChoose = computersChoice();

	console.log(`Player Chooses : ${playerChoice}`);
	console.log(`Computer Chooses: ${computerChoose}`);

	if (playerChoice === computerChoose) {
		resultsOfGame.textContent = "its a tie";
	} else if (
		(playerChoice === array[1] && computerChoose === array[0]) ||
		(playerChoice === array[2] && computerChoose === array[1]) ||
		(playerChoice === array[0] && computerChoose === array[2])
	) {
		playerScore++;

		resultsOfGame.textContent = "Player Wins!!!";
	} else {
		computerScore++;
		resultsOfGame.textContent = "Computer Wins!!!";
	}
	player.textContent = playerScore;
	computer.textContent = computerScore;
}
function restart() {
	playerScore = 0;
	computerScore = 0;
	resultsOfGame.textContent = "";
	finalResult.textContent = "";
}

play.addEventListener("click", playGame);
reset[0].addEventListener("click", restart);
