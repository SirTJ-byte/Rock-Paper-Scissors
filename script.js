function playGame() {
	let array = ["rock", "paper", "scissors"];

	let playerScore = 0;
	let computerScore = 0;

	function computersChoice() {
		const computerRandomChoice = Math.floor(Math.random() * array.length);
		const computerChooses = array[computerRandomChoice];
		return computerChooses;
	}

	for (let getRound = 1; getRound <= 5; getRound++) {
		let playerChoice;
		let isInvalidInput = false;
		while (!isInvalidInput) {
			playerChoice = prompt("Choose between Rock, Paper, and Scissors")
				.toLowerCase()
				.trim();
			//check the vadility
			if (array.includes(playerChoice)) {
				isInvalidInput = true;
			} else {
				console.log("invalid choice!!! Please Choose Rock, Paper and Scissors");
			}
		}
		const computerChoose = computersChoice();

		console.log(`Player Chooses : ${playerChoice}`);
		console.log(`Computer Chooses: ${computerChoose}`);

		if (playerChoice === computerChoose) {
			console.log("its a tie");
		} else if (
			(playerChoice === array[1] && computerChoose === array[0]) ||
			(playerChoice === array[2] && computerChoose === array[1]) ||
			(playerChoice === array[0] && computerChoose === array[2])
		) {
			playerScore++;
			console.log("Player Wins!!!");
		} else {
			computerScore++;
			console.log("Computer Wins!!!");
		}

		console.log(`round ${getRound} complete`);
		console.log(
			`current Score : Player ${playerScore} vs Computer${computerScore}`
		);
		console.log("-------------------------");
	}
	console.log("\n --- Final results ---");
	console.log(
		`Final Score: Player ${playerScore} vs Computer ${computerScore}`
	);
	if (playerScore > computerScore) {
		console.log("Congrats, You Win");
	} else if (playerScore < computerScore) {
		console.log("Sorry, Computer Won");
	} else {
		console.log("The game is a Grand tie!");
	}
}
playGame();
