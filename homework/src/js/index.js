import '../scss/app.scss';
import {resetDiv, cellDivs, nextPlayer} from './dom-elements';
import checkGameStatus from './check-game-status';
import {gameIsLive, xIsNext} from './test-vars';


// let gameIsLive = true;
// let xIsNext = true;


//event handlers
const handleCellClick = (e) => {
    const classList = e.target.classList;

    if (!gameIsLive || classList[1] === 'x' || classList[1] === 'o') {
        return;
    }

    if (xIsNext) {
        classList.add('x');
        xIsNext = !xIsNext;
        nextPlayer.innerText = 'O is next';
        checkGameStatus()
    } else {
        classList.add('o');
        xIsNext = !xIsNext;
        nextPlayer.innerText = 'X is next';
        checkGameStatus()
    }
};

const handleReset = () => {
    xIsNext = true;
    nextPlayer.innerText = 'X Turn';
    gameIsLive = true;

    for (const cellDiv of cellDivs) {
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
        cellDiv.classList.remove('won');
    }
};
//listeners
resetDiv.addEventListener('click', handleReset);

for (const cellDiv of cellDivs) {
    cellDiv.addEventListener('click', handleCellClick);
}

// import {gameIsLive, xIsNext} from './game-variables';
//new game button the grid should be cleared, but players'
// scores should remain.
//reset btn both players' scores and grid should be cleared.
//players score - if draw increased both by 1
