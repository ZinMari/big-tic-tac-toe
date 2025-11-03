import { GameSymbol } from "./game-symbol";

import styles from "./game.module.css";

export function GameCell({ isWinner, onClick, symbol, disabled }) {
  return (
    <button
      className={`${styles["cell"]}, ${isWinner && styles["cell--win"]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}
