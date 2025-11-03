import Game from "../components/game/game";

// // Вынос универсального хелпера — как аналог classnames/clsx
// const mergeClassNames = (...classes) => classes.filter(Boolean).join(" ");

// Вынос логики класса символа для переиспользования и упрощения тестов

export default function HomePage() {
  return <Game />;
}
