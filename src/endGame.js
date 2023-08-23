import updateBoard from "./updateBoard";

const endGame = (pBoard, aiBoard, isPlayerWon) => {
    if(isPlayerWon) {
        const winnerText = document.querySelector('.winnerText');
        winnerText.textContent = 'You Won Do You Want To Play Again?';
    } else {
        const winnerText = document.querySelector('.winnerText');
        winnerText.textContent = 'Ai Won Do You Want To Play Again';
    }

    const winBackground = document.querySelector('.winBackground');
    winBackground.style.display = 'flex';

    const restartButton = document.querySelector('.restartButton');
    restartButton.addEventListener('click', () => {
        pBoard.resetBoard();
        updateBoard(pBoard.board, 'p', false);

        aiBoard.resetBoard();
        updateBoard(aiBoard.board, 'ai', true);

        const buttonsDiv = document.querySelector('.buttons');
        buttonsDiv.style.display = 'flex';

        const startButton = document.querySelector('.startButton');
        startButton.style.display = 'flex';

        const manualButton = document.querySelector('.manual');
        manualButton.style.display = 'flex';
        manualButton.style.removeProperty('margin-left');

        const placeRandomButton = document.querySelector('.random');
        placeRandomButton.style.display = 'flex';
        placeRandomButton.style.removeProperty('margin-left');

        const axisButton = document.querySelector('.axisButton');
        if(axisButton !== null) {
            axisButton.style.display = 'none';
        }

        winBackground.style.display = 'none';
    })
}

export default endGame;