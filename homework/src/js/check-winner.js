import {nextPlayer, resetDiv, statusDiv} from "./dom-elements";
import letterToSymbol from "./convert-letter-to-symbol";
import {gameIsLive} from './test-vars';

// let gameIsLive = true;

const checkWinner = (letter) => {
    gameIsLive = false;
    nextPlayer.innerHTML = `<span>${letterToSymbol(letter)} has won</span>`;
    statusDiv.appendChild(resetDiv);
};

export default checkWinner;