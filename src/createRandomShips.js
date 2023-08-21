import createShip from "./createShip";

const createRandomShips = (board, shipLength) => {
    const axisDecider = Math.floor(Math.random() * 2) + 1;
    const boardCopy = [...board];

    if(axisDecider === 1) {
        let startingColumn;
        let startingRow;

        do {
            startingColumn = Math.floor(Math.random() * ((10 - shipLength) + 1));
            startingRow = (Math.floor(Math.random() * 10)) * 10;
        } while (
            boardCopy.slice(startingRow + startingColumn, startingRow + startingColumn + shipLength)
            .some(cell => cell.storedShip)
        )

        const newShip = createShip(shipLength, false);
        for(let i = 0; i < shipLength; i += 1) {
            boardCopy[startingRow + startingColumn + i].storedShip = newShip;
        }
    } else {
        let startingColumn;
        let startingRow;
        let hasStoredShip

        do {
            startingColumn = Math.floor(Math.random() * 10);
            startingRow = Math.floor(Math.random() * ((10 - shipLength) + 1)) * 10;
        
            const slicedArray = [];
            for (let i = startingRow + startingColumn; i < startingColumn + startingRow + (shipLength * 10); i += 10) {
                slicedArray.push(boardCopy[i]);
            }
        
            hasStoredShip = slicedArray.some(cell => cell.storedShip);
        } while (hasStoredShip);

        const newShip = createShip(shipLength, true);
        for(let i = 0; i < shipLength * 10; i += 10) {
            boardCopy[startingRow + startingColumn + i].storedShip = newShip;
        }
    }

    return boardCopy;
}

export default createRandomShips;