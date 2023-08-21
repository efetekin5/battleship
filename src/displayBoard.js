const displayBoard = (id, player) => {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    if(player === 'p') {
        cell.id = `${player}${id}`;

        const playerBoard = document.querySelector('.playerBoard');
        playerBoard.appendChild(cell);
    } else if(player === 'ai') {
        cell.id = `${player}${id}`;

        const aiBoard = document.querySelector('.aiBoard');
        aiBoard.appendChild(cell);
    }
}

export default displayBoard;