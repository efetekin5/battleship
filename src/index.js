import gameBoard from "./gameBoard";
import createPlayer from "./createPlayer";
import endGame from "./endGame";
import addAxisButton from "./addAxisButton";
import displayManualShips from "./displayManualShips";
import createShip from "./createShip";
import updateBoard from "./updateBoard";


const pBoard = gameBoard();
pBoard.createBoard('p');
const aiBoard = gameBoard();
aiBoard.createBoard('ai');

const player = createPlayer('player', aiBoard);
const ai = createPlayer('ai', pBoard);

const placeRandomButton = document.querySelector('.random');
const placeManuallyButton = document.querySelector('.manual');

placeRandomButton.addEventListener('click', () => {
    placeManuallyButton.style.display = 'none';

    placeRandomButton.style.marginLeft = '115px';

    pBoard.randomShips('p', false);
})

const handleClick = (event) => {
    const index = Number(event.target.id.slice(2))
    
    if(aiBoard.board[index].beenHit === false) {
        player.attack(index, 'ai', true);
        const isPlayerWon = aiBoard.allShipsSunk();
        if(isPlayerWon) {
            endGame(pBoard, aiBoard, true);

            const allCells = document.querySelectorAll('div.cell[id^="ai"]');
            allCells.forEach((cell) => {
                cell.removeEventListener('click', handleClick);
            })
        }

        ai.aiAttack();
        const isAiWon = pBoard.allShipsSunk();
        if(isAiWon) {
            endGame(pBoard, aiBoard, false);

            const allCells = document.querySelectorAll('div.cell[id^="ai"]');
            allCells.forEach((cell) => {
                cell.removeEventListener('click', handleClick);
            })
        }
    }
}

const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', () => {

    let shipCells = 0;
    for(let i = 0; i < 100; i += 1) {
        if(pBoard.board[i].storedShip !== false) {
            shipCells += 1;
        }
    }

    if(shipCells === 17) {
        const buttonsDiv = document.querySelector('.buttons');
        buttonsDiv.style.display = 'none';
        startButton.style.display = 'none';


        aiBoard.randomShips('ai', true);

        const allCells = document.querySelectorAll('div.cell[id^="ai"]');
        allCells.forEach((cell) => {
            cell.addEventListener('click', handleClick);
        })
    }
})

placeManuallyButton.addEventListener('click', () => {

    placeRandomButton.style.display = 'none';

    const axisButton = document.querySelector('.axisButton');
    if(axisButton === null) {
        addAxisButton(pBoard.board);

        const allPlayerCells = document.querySelectorAll('div.cell[id^="p"]');
        allPlayerCells.forEach((cell) => {
            cell.addEventListener('mouseenter', (event) => {
                let shipCells = 0;
                for(let i = 0; i < 100; i += 1) {
                    if(pBoard.board[i].storedShip !== false) {
                        shipCells += 1;
                    }
                }

                if(shipCells === 0) {
                    displayManualShips(event, 5, false, pBoard.board);
                } else if(shipCells === 5) {
                    displayManualShips(event, 4, false, pBoard.board);
                } else if(shipCells === 9) {
                    displayManualShips(event, 3, false, pBoard.board);
                } else if(shipCells === 12) {
                    displayManualShips(event, 3, false, pBoard.board);
                } else if(shipCells === 15) {
                    displayManualShips(event, 2, false, pBoard.board);
                }
            })
        })

        allPlayerCells.forEach((cell) => {
            cell.addEventListener('mouseleave', (event) => {
                displayManualShips(event, 5, true, pBoard.board);
            })
        })

        allPlayerCells.forEach((cell) => {
            cell.addEventListener('click', (event) => {
                let newShip;
                let isVertical;
                const addedAxisButton = document.querySelector('.axisButton');

                if(addedAxisButton.textContent === 'Vertical') {
                    isVertical = true;
                } else {
                    isVertical = false;
                }

                let shipCells = 0;
                for(let i = 0; i < 100; i += 1) {
                    if(pBoard.board[i].storedShip !== false) {
                        shipCells += 1;
                    }
                }

                if(shipCells === 0) {
                    newShip = createShip(5, isVertical);
                } else if(shipCells === 5) {
                    newShip = createShip(4, isVertical);
                } else if(shipCells === 9) {
                    newShip = createShip(3, isVertical);
                } else if(shipCells === 12) {
                    newShip = createShip(3, isVertical);
                } else if(shipCells === 15) {
                    newShip = createShip(2, isVertical);
                }

                const cellId = Number(event.target.id.slice(1));
                if(newShip.isVertical) {
                    for(let i = 0; i < newShip.length * 10; i += 10) {
                        if(pBoard.board[cellId + i].storedShip !== false) {
                            return;
                        }
                    }
                } else {
                    for(let i = 0; i < newShip.length; i += 1) {
                        if(pBoard.board[cellId + i].storedShip !== false) {
                            return;
                        }
                    }
                }

                const clickedCell = document.querySelector(`#p${cellId}`);
                if(clickedCell.style.background !== 'rgb(185, 74, 74)') {
                    pBoard.placeShip(newShip, cellId);
                    updateBoard(pBoard.board, 'p', false);
                }
            })
        })
    }
})
