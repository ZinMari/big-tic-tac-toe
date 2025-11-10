import clsx from "clsx";
import { SYMBOL_O, SYMBOL_X } from "./constants";

export const GameSymbol = ({ symbol }) => (
  <span
    className={clsx(
      {
        "text-emerald-700": symbol === SYMBOL_O,
      },
      { "text-red-600": symbol === SYMBOL_X }
    )}
  >
    {symbol}
  </span>
);
