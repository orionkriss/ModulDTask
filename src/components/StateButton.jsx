import React, { useState } from "react";

function StateChangeButton() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked the button {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function StateChangeButtonTimesTen() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Every time you click, it will add 10: {count} </p>
      <button onClick={() => setCount(count + 10)}>Click me</button>
    </div>
  );
}

const StateButton = () => {
  return (
    <div>
      <StateChangeButton />
      <StateChangeButtonTimesTen />
    </div>
  );
};

export default StateButton;
