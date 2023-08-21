import displayBoard from "./displayBoard";
import updateBoard from "./updateBoard";
import createRandomShips from "./createRandomShips";

const gameBoard = () => {
  let board = [];

  const createBoard = (player) => {
    for (let i = 0; i < 100; i += 1) {
      board[i] = { storedShip: false, beenHit: false };
      displayBoard(i, player);
    }
  };

  const placeShip = (ship, start) => {
    if (ship.isVertical) {
      for (let i = start; i < start + ship.length * 10; i += 10) {
        board[i].storedShip = ship;
      }
    } else {
      for (let i = start; i < start + ship.length; i += 1) {
        board[i].storedShip = ship;
      }
    }
  };

  const randomShips = (boardId, isAiBoard) => {
    let boardCopy = [...board];

    for(let i = 0; i < 100; i += 1) {
      boardCopy[i].storedShip = false;
    }

    boardCopy = createRandomShips(board, 5);
    /*
    boardCopy = createRandomShips(board, 4);
    boardCopy = createRandomShips(board, 3);
    boardCopy = createRandomShips(board, 3);
    boardCopy = createRandomShips(board, 2);
    */

    updateBoard(boardCopy, boardId, isAiBoard);
    board = boardCopy;
  }

  const receiveAttack = (cordinates, boardId, isAiBoard) => {
    if (board[cordinates].storedShip !== false) {
      board[cordinates].beenHit = true;
      board[cordinates].storedShip.hit(cordinates, board);
      updateBoard(board, boardId, isAiBoard);
    } else {
      board[cordinates].beenHit = true;
      updateBoard(board, boardId, isAiBoard);
    }
  };

  const allShipsSunk = () => {
    for(let i=0; i < 100; i += 1) {
      if(board[i].storedShip !== false && board[i].beenHit === false) {
        return false;
      }
    }

    return true;
  }

  const resetBoard = () => {
    for(let i=0; i < 100; i += 1) {
      board[i].storedShip = false;
      board[i].beenHit = false;
    }
  }

  return { board, createBoard, placeShip, receiveAttack, allShipsSunk, randomShips, resetBoard };
};

export default gameBoard;