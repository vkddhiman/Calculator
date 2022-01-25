import { useState } from "react";
import "./App.css";

function App() {
  const dialNumbers = [9, 8, 7, "+", 6, 5, 4, "-", 3, 2, 1, "*", ".", 0];
  const [result, setResult] = useState("");

  const handleClick = (event) => {
    setResult(result.concat(event.target.value));
  };

  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    setResult(eval(result).toString());
  };

  return (
    <div className="container">
      <form>
        <input type="text" value={result} />
      </form>
      {dialNumbers.map((dial) => (
        <input
          type="button"
          value={dial}
          className="button"
          onClick={handleClick}
        />
      ))}

      <input type="button" value="C" className="button" onClick={backspace} />
      <input type="button" value="/" className="button" onClick={handleClick} />
      <input type="button" value="Clear" className="button1" onClick={clear} />
      <input type="button" value="=" className="button1" onClick={calculate} />
    </div>
  );
}

export default App;
