var getUserChoice = function (userInput) {
    console.log(`${userInput}`.toLowerCase());
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
} else {
    console.log('error in console')
}
};
getUserChoice ('rock');

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
 console.log(`ComputerChoice: ${getComputerChoice()}`);

 var determineWinner = function (userChoice, computerChoice) {
    
 }
