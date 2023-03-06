import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import ClearButton from "./ClearButton";
import EqualButton from "./EqualButton";

function Calculator() {
  const [input, setInput] = useState("");

  const val = [
    "%",
    "**",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    ".",
    "0",
  ];

  const handleInput = (value) => {
    setInput(input.toString() + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="w-80 mx-auto my-10 rounded-md bg-white shadow-md">
      <Display input={input} />
      <div className="grid grid-cols-4 gap-2 p-2">
        <ClearButton handleClear={handleClear} />
        {val.map((item) => (
          <Button key={item} value={item} handleInput={handleInput} />
        ))}
        <EqualButton handleCalculation={handleEqual} />
      </div>
    </div>
  );
}

export default Calculator;
