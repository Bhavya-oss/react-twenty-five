import React, { useCallback, useState } from "react";
import UseCallBackChild from "./UseCallBackChild";

function UseCallBackParent() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);
  const originalArray = [3, 50, 15, 20, 8, 7];
  const [arrayToSort, setArrayToSort] = useState([...originalArray]);
  const [sorted, setSorted] = useState(false);
  const AlphaArray = ["banana", "apple", "orenge", "kivi", "yellow", "green"];
  const [alphaSort, setAlphaSort] = useState([...AlphaArray]);
  const [isAlphaSorted, setIsAlphaSorted] = useState(false);
  const funtoChild = useCallback(() => {
    setOtherCount((otherCount) => otherCount + 1);
  }, [otherCount]);

  function handleSort() {
    if (!sorted) {
      setArrayToSort((arrayToSort) => [...arrayToSort].sort((a, b) => a - b));
    } else {
      setArrayToSort(originalArray);
    }
    setSorted(!sorted);
  }

  function handleClickAlpha() {
    if (!isAlphaSorted) {
      const sort = [...alphaSort].sort();
      setAlphaSort(sort);
    } else {
      setAlphaSort(AlphaArray);
    }

    setIsAlphaSorted(!isAlphaSorted);
  }

  return (
    <div>
      {arrayToSort.map((curr) => (
        <div>{curr}</div>
      ))}
      <button onClick={handleSort}>{sorted ? "Unsort" : "Sort"}</button>
      {alphaSort.map((curr) => (
        <div>{curr}</div>
      ))}
      <button onClick={handleClickAlpha}>
        {isAlphaSorted ? "AlphaSort" : "UnsortAlpha"}
      </button>
      <div>{otherCount}</div>
      <UseCallBackChild funtoChild={funtoChild} />
      UseCallBackParent
      <div>{count}</div>
      <button onClick={() => setCount((count) => count + 1)}>Count</button>
      {/* <button onClick={funtoChild}>otherCount</button> */}
    </div>
  );
}

export default UseCallBackParent;
