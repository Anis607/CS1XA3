var origBoard;
const realPlayer = 'O';
const cpuPlayer = 'X';
const combWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

const boxes = document.querySelectorAll('.cell');
startGame();

function startGame() {
  document.querySelector(".endgame").style.display = "none";
  origBoard = Array.from(Array(9).keys());
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerText = '';
    boxes[i].style.removeProperty('background-color');
    boxes[i].addEventListener('click', clickTurn, false);
  }
}

function clickTurn(square) {
  if (typeof origBoard[square.target.id] == 'number') {
    turn(square.target.id, realPlayer)
    if (!winCheck(origBoard, realPlayer) && !tieCheck()) turn(spotBest(), cpuPlayer);
  }
}

function turn(squareId, player) {
  origBoard[squareId] = player;
  document.getElementById(squareId).innerText = player;
  let gameWon = winCheck(origBoard, player)
  if (gameWon) gameOver(gameWon)
}

function winCheck(board, player) {
  let plays = board.reduce((a, e, i) =>
    (e === player) ? a.concat(i) : a, []);
  let gameWon = null;
  for (let [index, win] of combWin.entries()) {
    if (win.every(elem => plays.indexOf(elem) > -1)) {
      gameWon = {index: index, player: player};
      break;
    }
  }
  return gameWon;
}

function gameOver(gameWon) {
  for (let index of combWin[gameWon.index]) {
    document.getElementById(index).style.backgroundColor =
      gameWon.player == realPlayer ? "blue" : "red";
  }
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].removeEventListener('click', clickTurn, false);
  }
  decWin(gameWon.player == realPlayer ? "You win!" : "You lost.");
}

function decWin(who) {
  document.querySelector(".endgame").style.display = "block";
  document.querySelector(".endgame .text").innerText = who;
}

function empSquares() {
  return origBoard.filter(s => typeof s == 'number');
}

function spotBest() {
  return maxMini(origBoard, cpuPlayer).index;
}

function tieCheck() {
  if (empSquares().length == 0) {
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].style.backgroundColor = "green";
      boxes[i].removeEventListener('click', clickTurn, false);
    }
    decWin("It's a Tie!")
    return true;
  }
  return false;
}

function maxMini(boardNew, player) {
  var spotAvail = empSquares();

  if (winCheck(boardNew, realPlayer)) {
    return {score: -10};
  } else if (winCheck(boardNew, cpuPlayer)) {
    return {score: 10};
  } else if (spotAvail.length === 0) {
    return {score: 0};
  }
  var moves = [];
  for (var i = 0; i < spotAvail.length; i++) {
    var move = {};
    move.index = boardNew[spotAvail[i]];
    boardNew[spotAvail[i]] = player;

    if (player == cpuPlayer) {
      var result = maxMini(boardNew, realPlayer);
      move.score = result.score;
    } else {
      var result = maxMini(boardNew, cpuPlayer);
      move.score = result.score;
    }

    boardNew[spotAvail[i]] = move.index;

    moves.push(move);
  }

  var movBest;
  if(player === cpuPlayer) {
    var scoreBest = -10000;
    for(var i = 0; i < moves.length; i++) {
      if (moves[i].score > scoreBest) {
        scoreBest = moves[i].score;
        movBest = i;
      }
    }
  } else {
    var scoreBest = 10000;
    for(var i = 0; i < moves.length; i++) {
      if (moves[i].score < scoreBest) {
        scoreBest = moves[i].score;
        movBest = i;
      }
    }
  }

  return moves[movBest];
}
