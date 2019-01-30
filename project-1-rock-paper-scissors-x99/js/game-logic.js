// All code should be written in this file.

// I need 12 global Variables with each players move types and values
//This section creates variables for the type of move(rock/paper/scissor) each player chooses to play
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;

let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;

//This section creates variables for the values of each move that both players decide to player
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;

let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

const P1 = 'Player One';
const P2 = 'Player Two';
const TIE = 'Tie';
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';


const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType,
  moveTwoValue, moveThreeType, moveThreeValue) => {
  if (!moveOneType || !moveOneValue || !moveTwoType ||
    !moveTwoValue || !moveThreeType || !moveThreeValue) {
    return;
  }

  if (!validTypes(moveOneType, moveTwoType, moveThreeType))  {
    return;
  }

  if (!validValues(moveOneValue, moveTwoValue, moveThreeValue))  {
      return;
  }

  switch (player) {
    case P1:
    playerOneMoveOneType = moveOneType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveThreeValue = moveThreeValue;
    break;

    case P2:
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveThreeValue = moveThreeValue;
    break;
  }
};

  const validTypes = (type1, type2, type3) =>
    validType(type1) && validType(type2) && validType(type3);

  const validType = (type) => type === ROCK || type === PAPER || type === SCISSORS;

  const validValues = (value1, value2, value3) =>
  value1 >= 1 && value2 >= 1 && value3 >= 1 && value1 + value2 + value3 <= 99;


  const getRoundWinner = round => {
    let playerOneType;
    let playerOneValue;
    let playerTwoType;
    let playerTwoValue;

    switch (round) {
      case 1:
      playerOneType = playerOneMoveOneType;
      playerOneValue = playerOneMoveOneValue;
      playerTwoType = playerTwoMoveOneType;
      playerTwoValue = playerTwoMoveOneValue;
      break;

      case 2:
      playerOneType = playerOneMoveTwoType;
      playerOneValue = playerOneMoveTwoValue;
      playerTwoType = playerTwoMoveTwoType;
      playerTwoValue = playerTwoMoveTwoValue;
      break;

      case 3:
      playerOneType = playerOneMoveThreeType;
      playerOneValue = playerOneMoveThreeValue;
      playerTwoType = playerTwoMoveThreeType;
      playerTwoValue = playerTwoMoveThreeValue;
      break;

      default:
      return null;
    }
    return evaluateMove(playerOneType, playerOneValue, playerTwoType, playerTwoValue);
};

  const evaluateMove = (playerOneType, playerOneValue, playerTwoType, playerTwoValue) => {
//ensure that all moves are present
    if (!playerOneType || !playerOneValue || !playerTwoType || !playerTwoValue) {
      return null;
    }

    //if the types are the same then the winner is chosen via the higher value points
    if (playerOneType === playerTwoType) {
      if (playerOneValue === playerTwoValue) {
        return TIE;
      }
      return playerOneValue > playerTwoValue ? P1 : P2;
    }
// types are different than normal rock-paper-scissor rules apply
   switch (playerOneType) {
     case ROCK:
       return playerTwoType === SCISSORS ? P1 : P2;

     case PAPER:
       return playerTwoType === ROCK ? P1 : P2;

     case SCISSORS:
       return playerTwoType === PAPER ? P1 : P2;
 }
};

let p1Wins;
let p2Wins;

const allGlobalsDefined = () =>
  playerOneMoveOneType &&
  playerOneMoveTwoType &&
  playerOneMoveThreeType &&
  playerTwoMoveOneType &&
  playerTwoMoveTwoType &&
  playerTwoMoveThreeType &&
  playerOneMoveOneValue &&
  playerOneMoveTwoValue &&
  playerOneMoveThreeValue &&
  playerTwoMoveOneValue &&
  playerTwoMoveTwoValue &&
  playerTwoMoveThreeValue;


const getGameWinner = () => {
  if (!allGlobalsDefined()) {
    return null;
  }


  let r1Winner = getRoundWinner(1);
  let r2Winner = getRoundWinner(2);
  let r3Winner = getRoundWinner(3);

  p1Wins = 0;
  p2Wins = 0;

  incrementScores(r1Winner);
  incrementScores(r2Winner);
  incrementScores(r3Winner);

  if (p1Wins === p2Wins) {
    return TIE;
  } return p1Wins > p2Wins ? P1 : P2;
};

const incrementScores = winner => {
  switch (winner) {
    case P1:
     p1Wins += 1;
     break;

   case P2:
     p2Wins += 1;
     break;
  }
};
