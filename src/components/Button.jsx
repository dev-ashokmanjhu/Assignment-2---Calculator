function Button({ value, handleInput }) {
  return (
    <button
      className="h-16 text-3xl text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none"
      onClick={() => handleInput(value)}
    >
      {value}
    </button>
  );
}

export default Button;
