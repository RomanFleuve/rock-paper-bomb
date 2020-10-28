const getUserChoice = userInput => {
    userInput = userInput.toLowerCase('bomb');
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor' || userInput === 'bomb' ) {
    return userInput;
    } else {
      console.log('Please choose rock, paper, or scissors');
    }
    }
    
    const getComputerChoice = () => {
     const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
      return 'rock';
      case 1:
      return 'paper';
      case 2: 
      return 'scissors'
    } 
    }
    const determineWinner = (userChoice, computerChoice) => {
    if (userChoice  === 'bomb') {
              return 'you win';
     } if (userChoice === computerChoice) {
        return 'Hot darn its a draw';
      } if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'Shoot, computer paper crushes feeble human rock';
        } else {
          return 'Yay human rock beats computer scissors' 
          } 
        } if (userChoice === 'paper') {
          if (computerChoice === 'scissors') {
            return 'Darn computers and their scissors'; 
          } else {
           return 'Woo baby crush that PC rock with your fleshy paper';
          }
          }
          if (userChoice === 'scissors') {
            if (computerChoice === 'rock') {
              return 'gosh darnit that PC rock bashed my meaty scissors';
            } else {
              return 'mwhahaha your crappy printer paper is no match for my superior human scissors!';
            }
          }
        }
    
    const playGame = () => { 
     const userChoice = getUserChoice('bomb');
     const computerChoice = getComputerChoice('paper');
    console.log('Silly human, you chose ' + userChoice);
    console.log('The omniscient AI chose ' +  computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
    }
    playGame()