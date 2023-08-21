const displayManualShips = (event, shipLength, revert) => {
    const axisButton = document.querySelector('.axisButton');
    const cellId = Number(event.target.id.slice(1));
    const columnIndex = cellId % 10;
    const rowIndex = Math.floor(cellId / 10);

    if(revert) {

        if(axisButton.textContent === 'Horizontal') {
            for(let i = 0; i < shipLength; i += 1) {
                const cellRevert = document.querySelector(`#p${cellId + i}`);
                cellRevert.style.backgroundColor = 'white';
            }
        } else if(axisButton.textContent === 'Vertical') {
            for(let i = 0; i < shipLength * 10; i += 10) {
                const cellRevert = document.querySelector(`#p${cellId + i}`);
                cellRevert.style.backgroundColor = 'white';
            }
        }

    } else if(axisButton.textContent === 'Horizontal') {

        const unvalidCells = columnIndex - shipLength;
        if(columnIndex > (9 - shipLength) + 1) {
            for(let i = 0; i < shipLength - unvalidCells; i += 1) {
                const cell = document.querySelector(`#p${cellId + i}`);
                cell.style.background = 'rgb(185, 74, 74)';
            }
        } else {
            for(let i = 0; i < shipLength; i += 1) {
                const cell = document.querySelector(`#p${cellId + i}`);
                cell.style.background = 'lime';
            }
        }

    } else if(axisButton.textContent === 'Vertical'){

        if(rowIndex > (9 - shipLength) + 1) {
            for(let i = 0; i < shipLength * 10; i += 10) {
                const cell = document.querySelector(`#p${cellId + i}`);
                cell.style.background = 'rgb(185, 74, 74)';
            }
        } else {
            for(let i = 0; i < shipLength * 10; i += 10) {
                const cell = document.querySelector(`#p${cellId + i}`);
                cell.style.background = 'lime';
            }
        }
        
    }

}

export default displayManualShips;