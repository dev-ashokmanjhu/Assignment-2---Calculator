import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import ClearButton from "./ClearButton";
import EqualButton from "./EqualButton";
import DeleteButton from "./DeleteButton";

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
      setInput(result);
    } catch (error) {
      setInput("Error");
    }
  };
  function handleDelete() {
    setInput(input.toString().slice(0, input.length - 1));
  }
  return (
    <div className="w-96 mx-auto  rounded-md bg-white shadow-md">
      <h1 className="font-medium text-center m-1 text-lg">Assignment 2</h1>
      <Display input={input} />
      <div className="grid grid-cols-4 gap-2 p-2">
        <ClearButton handleClear={handleClear} />
        {val.map((item) => (
          <Button key={item} value={item} handleInput={handleInput} />
        ))}
        <DeleteButton handleDelete={handleDelete} />
        <EqualButton handleCalculation={handleEqual} />
      </div>
    </div>
  );
}

export default Calculator;
