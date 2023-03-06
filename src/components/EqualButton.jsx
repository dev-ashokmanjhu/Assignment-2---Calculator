function EqualButton({ handleCalculation }) {
  return (
    <button
      className="h-16 text-3xl text-white bg-red-500 hover:bg-red-600 rounded-md focus:outline-none"
      onClick={handleCalculation}
    >
      =
    </button>
  );
}

export default EqualButton;
