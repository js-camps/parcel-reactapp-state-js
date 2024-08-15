import React, { useState } from "react";
import "../styles.css";

export function App() {
  const initialState = 0;
  const [count, setCount] = useState(initialState);

  const incClick = () => {
    setCount(count + 1); 
  };

  return (
    <div className="App">
      <textarea rows="1" value={count} id="total" type="text" name="ans" readOnly />
      <br />
      <button type="button" className="btn" onClick={incClick}>
        + 1
      </button>
      <button type="button" className="btn" onClick={() => setCount(count - 1)}>
        - 1
      </button>
    </div>
  );
}