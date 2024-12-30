import React, { useMemo, useState } from "react";

function UseMemo() {
  const [number, setNumber] = useState("");
  const [count, setCount] = useState(0);
  function cube(num) {
    console.log("Calculation done");
    return Math.pow(number, 3);
  }

  const result = useMemo(() => cube(), [number]);
  console.log("result", result);
  function handleChange(e) {
    setNumber(e.target.value);
  }

  return (
    <div>
      UseMemo
      <input type="number" value={number} onChange={handleChange} />
      <div>Power is {result}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Counter useMemo
      </button>
      <div>{count}</div>
    </div>
  );
}

export default UseMemo;
