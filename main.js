var getUserChoice = function (userInput) {
    console.log(`${userInput}`.toLowerCase());
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
} else {
    console.log('error in console')
}
};
//getUserChoice ('bomb');

var getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
          return "rock";
        case 1:
          return "scissors";
        case 2:
          return "paper";
    }
};
 //console.log(`ComputerChoice: ${getComputerChoice()}`);
 var determineWinner = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "the game is a tie";
    }
    if (userChoice === 'rock') {
        if (computerChoice === "paper") {
            return "the computer won!";
        } else {
            return "you won!";
        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "the computer won";
        } else {
            return "you won!";
        }
    }
    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "the computer won";
        } else {
            return "you won";
        }
    }
    if (userChoice === "bomb") {
        return "you won";
    }
 };

 var playGame = () => {
    var userChoice = getUserChoice ("bomb");
    var computerChoice = getComputerChoice ();
    console.log (`you threw: ${userChoice}`);
    console.log (`computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
 };
 playGame();
