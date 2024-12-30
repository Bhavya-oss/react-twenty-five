import React, { useContext } from "react";
import { createdContext } from "../../App";

function UseContextA() {
  const reciveContext = useContext(createdContext);
  console.log("reciveContextreciveContext", reciveContext);
  return (
    <div>
      UseContextA
      <div>{reciveContext.counter}</div>
      <div>{reciveContext.count}</div>
      <button onClick={() => reciveContext.setCount((count) => count + 1)}>
        Click
      </button>
    </div>
  );
}

export default UseContextA;
