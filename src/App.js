import "./App.css";
import logo from "./images/freecodecamp-logo.png";
import Button from "./components/Button/Button";
import Screen from "./components/Screen/Screen";
import Cbutton from "./components/ClearButton/Cbutton";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const addInput = (value) => {
    setInput(input + value);
  };

  const result = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor digite un valor válido");
    }
  };
  return (
    <div className="App">
      <div className="logocontainer">
        <img src={logo} className="logo" />
      </div>
      <div className="calculadora">
        <Screen input={input} />
        <div className="fila">
          <Button event={addInput}>1</Button>
          <Button event={addInput}>2</Button>
          <Button event={addInput}>3</Button>
          <Button event={addInput}>+</Button>
        </div>
        <div className="fila">
          <Button event={addInput}>4</Button>
          <Button event={addInput}>5</Button>
          <Button event={addInput}>6</Button>
          <Button event={addInput}>-</Button>
        </div>
        <div className="fila">
          <Button event={addInput}>7</Button>
          <Button event={addInput}>8</Button>
          <Button event={addInput}>9</Button>
          <Button event={addInput}>*</Button>
        </div>
        <div className="fila">
          <Button event={result}>=</Button>
          <Button event={addInput}>0</Button>
          <Button event={addInput}>.</Button>
          <Button event={addInput}>/</Button>
        </div>
        <div className="fila">
          <Cbutton eventClear={() => setInput("")}>Clear</Cbutton>
        </div>
      </div>
    </div>
  );
}

export default App;
