const container = document.querySelector('#container');

const screen = document.createElement('div');
screen.setAttribute('id', 'screen');
container.appendChild(screen);

function generateGrids(size) {
    for (i = 0; i < size; i++) {
        const column = document.createElement('div');
        for (j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.style.cssText = `height: ${500/size}px; width: ${500/size}px;`;
            cell.classList.add('cell');
            cell.addEventListener('mousedown', () => {
                cell.style.background = 'black';
            });
            column.appendChild(cell);
        };
        screen.appendChild(column);
    };
};

const navPane = container.querySelector('#nav-pane');

const gridRange = navPane.querySelector('#gridRange');

generateGrids(gridRange.value);

const gridDesc = document.createElement('p');
gridDesc.textContent = `grid size: ${gridRange.value}px`;
navPane.appendChild(gridDesc);

gridRange.addEventListener('input', () => {
    while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
    }
    generateGrids(gridRange.value);
    cells = document.querySelectorAll('.cell');
    gridDesc.textContent = `grid size: ${gridRange.value}px`;

});

let cells = document.querySelectorAll('.cell');

screen.addEventListener('mousedown', () => {
    cells.forEach((cell) => {
        cell.onmouseover = () => cell.style.background = 'black';
    });
});

screen.addEventListener('mouseup', () => {
    cells.forEach((cell) => {
        cell.onmouseover = () => null;
    });
});

const resetButton = document.createElement('button');
resetButton.addEventListener('click', () => {
    while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
    }
    generateGrids(gridRange.value);
    cells = document.querySelectorAll('.cell');
});
resetButton.textContent = 'reset';
navPane.appendChild(resetButton);
