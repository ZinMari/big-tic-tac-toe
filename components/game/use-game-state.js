import { useState, useMemo } from "react";
import { SYMBOL_O, SYMBOL_X } from "./constants";

export function useGameState() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [currentStep, setCurrentStep] = useState(SYMBOL_O);

  // Вычисление победителя на лету — оптимизировано useMemo — не пересчитывается без изменений
  const winnerSequence = useMemo(() => computeWinner(cells), [cells]);

  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;

  // useMemo оправдан — может использоваться несколько раз
  const isDraw = useMemo(() => {
    return !winnerSequence && cells.every(Boolean);
  }, [cells, winnerSequence]);

  const handleCellClick = (index) => {
    if (cells[index] || winnerSequence || isDraw) return;

    setCells((prev) => {
      const next = [...prev];
      next[index] = currentStep;
      return next;
    });
    setCurrentStep((prev) => (prev === SYMBOL_O ? SYMBOL_X : SYMBOL_O));
  };

  const handleResetClick = () => {
    setCells(Array(9).fill(null));
    setCurrentStep(SYMBOL_O);
  };

  return {
    cells,
    currentStep,
    winnerSequence,
    winnerSymbol,
    handleCellClick,
    handleResetClick,
    isDraw,
  };
}

const computeWinner = (cells) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of lines) {
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return [a, b, c];
    }
  }
  return null;
};
