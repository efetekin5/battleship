const displayManualShips = (event, shipLength, revert, board) => {
    const axisButton = document.querySelector('.axisButton');
    const cellId = Number(event.target.id.slice(1));
    const columnIndex = cellId % 10;
    const rowIndex = Math.floor(cellId / 10);

    const startButton = document.querySelector('.startButton');
    if(startButton.style.display !== 'none') {
        if(revert) {

            if(axisButton.textContent === 'Horizontal') {
                const unvalidCells = columnIndex - shipLength;
                if(unvalidCells > 0) {
                    for(let i = 0; i < shipLength - unvalidCells; i += 1) {
                        const cellRevert = document.querySelector(`#p${cellId + i}`);
                        if(board[cellId + i].storedShip === false) {
                            cellRevert.style.backgroundColor = 'white';
                        }
                    }
                } else {
                    for(let i = 0; i < shipLength; i += 1) {
                        const cellRevert = document.querySelector(`#p${cellId + i}`);
                        if(board[cellId + i].storedShip === false) {
                            cellRevert.style.backgroundColor = 'white';
                        }
                    }
                }
            } else if(axisButton.textContent === 'Vertical') {
                const unvalidCells = rowIndex - shipLength;
                if(unvalidCells > 0) {
                    for(let i = 0; i < (shipLength * 10) - (unvalidCells * 10); i += 10) {
                        const cellRevert = document.querySelector(`#p${cellId + i}`);
                        if(board[cellId + i].storedShip === false) {
                            cellRevert.style.backgroundColor = 'white';
                        }
                    }
                } else {
                    for(let i = 0; i < (shipLength * 10); i += 10) {
                        const cellRevert = document.querySelector(`#p${cellId + i}`);
                        if(board[cellId + i].storedShip === false) {
                            cellRevert.style.backgroundColor = 'white';
                        }
                    }
                }
            }
            
    
        } else if(axisButton.textContent === 'Horizontal') {
    
            const unvalidCells = (9 - columnIndex) + 1;
            if(columnIndex > (9 - shipLength) + 1) {
                
    
                for(let i = 0; i < unvalidCells; i += 1) {
                    const cell = document.querySelector(`#p${cellId + i}`);
                    if(board[cellId + i].storedShip === false) {
                        cell.style.background = 'rgb(185, 74, 74)';
                    }
                }
            } else {
                for(let i = 0; i < shipLength; i += 1) {
                    const cell = document.querySelector(`#p${cellId + i}`);
                    if(board[cellId + i].storedShip === false) {
                        cell.style.background = 'lime';
                    }
                }
            }
    
        } else if(axisButton.textContent === 'Vertical'){
    
            const unvalidCells = (9 - rowIndex) + 1;
            if(rowIndex > (9 - shipLength) + 1) {
                for(let i = 0; i < unvalidCells * 10; i += 10) {
                    const cell = document.querySelector(`#p${cellId + i}`);
                    if(board[cellId + i].storedShip === false) {
                        cell.style.background = 'rgb(185, 74, 74)';
                    }
                }
            } else {
                for(let i = 0; i < shipLength * 10; i += 10) {
                    const cell = document.querySelector(`#p${cellId + i}`);
                    if(board[cellId + i].storedShip === false) {
                        cell.style.background = 'lime';
                    }
                }
            }
            
        }
    }

}

export default displayManualShips;