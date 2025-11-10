export function ResetButton({ onClick }) {
  return (
    <button
      className="cursor-pointer mt-2.5 bg-transparent border border-gray-400 px-3 py-1 rounded"
      onClick={onClick}
    >
      Сбросить
    </button>
  );
}
