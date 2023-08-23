const addAxisButton = (board) => {
    const button = document.createElement('button');
    button.classList.add('axisButton');
    button.textContent = 'Horizontal';

    button.addEventListener('click', () => {
        let totalShips = 0;
        for(let i = 0; i < 100; i += 1) {
            if(board[i].storedShip !== false) {
                totalShips += 1;
            }
        }
        if(totalShips !== 17) {
            if(button.textContent === 'Vertical') {
                button.textContent = 'Horizontal';
            } else {
                button.textContent = 'Vertical';
            }
        }
    })

    const buttonsDiv = document.querySelector('.buttons');
    buttonsDiv.appendChild(button);
}

export default addAxisButton;