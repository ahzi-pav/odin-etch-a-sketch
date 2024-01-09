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
            const row = document.createElement('div');
            row.style.cssText = `height: ${500/size}px; width: ${500/size}px;`;
            row.classList.add('cell');
            column.appendChild(row);
        }
        screen.appendChild(column);
    }
}

generateGrids(16);