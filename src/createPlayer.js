const createPlayer = (name, oppBoard) => {

    const attack = (cordinates, boardId, isAiBoard) => {
        oppBoard.receiveAttack(cordinates, boardId, isAiBoard);
    }

    const aiAttack = () => {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * 99);
        } while (oppBoard.board[randomNumber].beenHit);

        oppBoard.receiveAttack(randomNumber, 'p', false);
    }

    return { name, oppBoard, attack, aiAttack }
}

export default createPlayer;