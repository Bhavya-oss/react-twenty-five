import React, { useReducer } from "react";

function UseReducer() {
  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT2":
        return state + action.payload;
      case "DECREMENT1":
        return state - action.payload;
      case "INCREMENT5":
        return state + action.payload;
      case "RESET":
        return action.payload;
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      UseReducer
      <h5>{state}</h5>
      <button onClick={() => dispatch({ type: "INCREMENT2", payload: 2 })}>
        Increment by 2
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT1", payload: 1 })}>
        Decrement by 1
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT5", payload: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "RESET", payload: 0 })}>
        Reset
      </button>
    </div>
  );
}

export default UseReducer;
