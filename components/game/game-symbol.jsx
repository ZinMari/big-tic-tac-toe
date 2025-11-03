import { SYMBOL_O, SYMBOL_X } from "./constants";

import styles from "./game.module.css";

export const GameSymbol = ({ symbol }) => (
  <span className={styles[`symbol ${getSymbolClassName(symbol)}`]}>
    {symbol}
  </span>
);

const getSymbolClassName = (symbol) => {
  if (symbol === SYMBOL_O) return "symbol--o";
  if (symbol === SYMBOL_X) return "symbol--x";
  return "";
};
