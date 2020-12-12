import {oSymbol, xSymbol} from "./game-symbols";

const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

export default letterToSymbol;