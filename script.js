const container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);

const navPane = document.createElement('div');
navPane.setAttribute('id', 'nav-pane');
container.appendChild(navPane);

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

const titleContainer = document.createElement('div');
titleContainer.setAttribute('id', 'title-container');
container.appendChild(titleContainer);

const title = document.createElement('h1');
title.setAttribute('id', 'title');
title.textContent = "Etch-a-Sketch";
titleContainer.appendChild(title);

generateGrids(16);

const cells = document.querySelectorAll('.cell');

screen.addEventListener('mousedown', () => {
    cells.forEach((cell) => {
        cell.onmouseover = () => cell.style.background = 'black';
    });
})

screen.addEventListener('mouseup', () => {
    cells.forEach((cell) => {
        cell.onmouseover = () => null;
    });
})