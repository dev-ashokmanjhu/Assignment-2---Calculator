function ClearButton({ handleClear }) {
  return (
    <button
      className="h-16 text-3xl text-gray-800 bg-gray-300 hover:bg-gray-400 rounded-md focus:outline-none"
      onClick={handleClear}
    >
      AC
    </button>
  );
}

export default ClearButton;
