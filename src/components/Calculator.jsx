import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import ClearButton from "./ClearButton";
import EqualButton from "./EqualButton";

function Calculator() {
  const [input, setInput] = useState(0);

  const handleInput = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput(0);
  };

  const handleEqual = () => {
    setInput(eval(input).toString());
  };

  return (
    <div className="w-80 mx-auto my-10 rounded-md bg-white shadow-md">
      <Display input={input} />
      <div className="grid grid-cols-4 gap-2 p-2">
        <ClearButton handleClear={handleClear} />
        <Button value={7} handleInput={handleInput} />
        <Button value={8} handleInput={handleInput} />
        <Button value={9} handleInput={handleInput} />
        <Button value="/" handleInput={handleInput} />
        <Button value={4} handleInput={handleInput} />
        <Button value={5} handleInput={handleInput} />
        <Button value={6} handleInput={handleInput} />
        <Button value="*" handleInput={handleInput} />
        <Button value={1} handleInput={handleInput} />
        <Button value={2} handleInput={handleInput} />
        <Button value={3} handleInput={handleInput} />
        <Button value="-" handleInput={handleInput} />
        <Button value={0} handleInput={handleInput} />
        <Button value="." handleInput={handleInput} />
        <EqualButton handleCalculation={handleEqual} />
        <Button value="+" handleInput={handleInput} />
      </div>
    </div>
  );
}

export default Calculator;
