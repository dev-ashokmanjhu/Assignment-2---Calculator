function Display({ input }) {
  return (
    <input
      className="w-full h-12 px-4 text-4xl text-right border-none focus:outline-none"
      type="text"
      value={input}
      readOnly
      placeholder="0"
    />
  );
}

export default Display;
