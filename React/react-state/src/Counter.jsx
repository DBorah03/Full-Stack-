import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);
  console.log("component was rendered");

  let inCount = () => {
    setCount((curCount) => {
      return curCount + 3;
    });
  };

  return (
    <>
      <h3>Count = {count}</h3>
      <button onClick={inCount}>Increase count</button>
    </>
  );
}
