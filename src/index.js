import gameBoard from "./gameBoard";
import createPlayer from "./createPlayer";
import endGame from "./endGame";
import addAxisButton from "./addAxisButton";
import displayManualShips from "./displayManualShips";


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

const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', () => {
    let shipCells = 0;
    for(let i = 0; i < 100; i += 1) {
        if(pBoard.board[i].storedShip !== false) {
            shipCells += 1;
        }
    }

    /*
        change the number back to 17
    */
    if(shipCells === 5) {
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
        addAxisButton();

        const allPlayerCells = document.querySelectorAll('div.cell[id^="p"]');
        allPlayerCells.forEach((cell) => {
            cell.addEventListener('mouseenter', (event) => {
                displayManualShips(event, 5, false);
            })
        })

        allPlayerCells.forEach((cell) => {
            cell.addEventListener('mouseleave', (event) => {
                displayManualShips(event, 5, true);
            })
        })
    }
})
