/*
// I am committed to being a person of integrity.
// This project is submitted as part of the assessment for Year 8 IST.
// This is all my own work. I have referenced any work used from other
// sources and have not plagiarised the work of others.
// (signed) John Allen
// I have attempted extension tasks 1 and 2.
*/
function startGame() {
	var lowerLimit = 1;
	var upperLimit = 10;
	var tries = 0;
	//Amount of tries starts at 0 and then will increase 
	//if the guess is correct add 1 or of it is to low or high.
	var randomNum = Math.floor(Math.random() * (upperLimit)) + lowerLimit;
	var guess = -1;
	//Guess starts not as a valid number.
	while(guess != randomNum) {
		guess = prompt("Enter your guess:");
		//Getting user to enter their guess.
		if(guess == ""){
			alert("Please enter a number");
			//If nothing is entered then alert.
		} else if(guess == null){
			break;
			//If the user presses cancel
		} else if(guess > 10){
			alert("Please enter a number between 1 and 10");
			//If a number entered above 10 alert
		} else if(guess < 1){
			alert("Please enter a number between 1 and 10");
			//If a number entered under 1 alert
		}else if(guess > randomNum){
			alert("Your guess is too high");
			tries = tries + 1;
			//If the guess is to high alert
		} else if(guess < randomNum){
			alert("Your guess is too low");
			tries = tries + 1;
			//If the guess is to low alert
		} else if(guess == randomNum){
			//If the guess is correct then alert
			tries = tries + 1;
			if(tries == 1){
				alert("Congratulations, you guessed the right number in " + tries +" guess!");
				//if the guess  is 1 then alert
			}
			else {
				alert("Congratulations, you guessed the right number in " + tries +" guesses!");
			}
			//If guess was more than 1 then alert

		}
	}
}
