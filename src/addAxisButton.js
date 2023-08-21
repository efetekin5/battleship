const addAxisButton = () => {
    const button = document.createElement('button');
    button.classList.add('axisButton');
    button.textContent = 'Horizontal';

    button.addEventListener('click', () => {
        if(button.textContent === 'Vertical') {
            button.textContent = 'Horizontal';
        } else {
            button.textContent = 'Vertical';
        }
    })

    const buttonsDiv = document.querySelector('.buttons');
    buttonsDiv.appendChild(button);
}

export default addAxisButton;