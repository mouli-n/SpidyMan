import React, { useState } from "react";
import "./calc.css";
function Calc() {
  const [num, setNum] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    "C",
    "+",
    "-",
    "*",
    "%",
  ]);

  const [displayInput, setDisplayInput] = useState([]);
  const valueClick = (e, index) => {
    if (num[index] === e) {
      let d = [];
      d.push(num[index]);

      setDisplayInput((e) => [...e, d]);
    }
    if (num[index] === "C") {
      setDisplayInput([]);
    }
  };

  return (
    <div className="App1">
      <div className="h-52 w-full bg-black text-zinc-100 flex items-center justify-center">
        <h1 className="font-bold text-5xl">{displayInput}</h1>
      </div>
      <div className="App3">
        <div className="App4">
          {num.map((ee, index) => (
            <div
              key={index}
              className="App"
              onClick={(e) => valueClick(ee, index)}
            >
              <p className="text-2xl">{ee}</p>
            </div>
          ))}
          <div
            className="App"
            onClick={() => {
              console.log(displayInput);
              setDisplayInput(displayInput);
            }}
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calc;
