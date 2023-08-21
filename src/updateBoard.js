const updateBoard = (board, boardId, isAiBoard) => {
  if (isAiBoard) {
    for (let i = 0; i < 100; i += 1) {
      if (board[i].storedShip !== false && board[i].beenHit === true) {
        const cell = document.getElementById(`${boardId}${i}`);
        cell.style.backgroundColor = "rgb(133, 255, 179)";
      } else if (board[i].storedShip === false && board[i].beenHit === true) {
        const cell = document.getElementById(`${boardId}${i}`);
        cell.style.backgroundColor = "rgb(255, 133, 133)";
      } else {
        const cell = document.getElementById(`${boardId}${i}`);
        cell.style.backgroundColor = "white";
      }
    }
  } else {
    for (let i = 0; i < 100; i += 1) {
      if (board[i].storedShip !== false && board[i].beenHit === false) {
        const cell = document.getElementById(`${boardId}${i}`);
        cell.style.backgroundColor = "rgb(68, 68, 68)";
      } else if (board[i].storedShip !== false && board[i].beenHit === true) {
        const cell = document.getElementById(`${boardId}${i}`);
        cell.style.backgroundColor = "rgb(133, 255, 179)";
      } else if (board[i].storedShip === false && board[i].beenHit === true) {
        const cell = document.getElementById(`${boardId}${i}`);
        cell.style.backgroundColor = "rgb(255, 133, 133)";
      } else {
        const cell = document.getElementById(`${boardId}${i}`);
        cell.style.backgroundColor = "white";
      }
    }
  }
};

export default updateBoard;
