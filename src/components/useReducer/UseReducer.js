import React, { useReducer } from "react";

function UseReducer() {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    console.log("action.payload", state, action.type);

    switch (action.type) {
      case "INCREMENT": {
        return { ...initialState, count: state.count + action.payload };
      }
      case "DECREMENT":
        return { ...initialState, count: state.count - action.payload };
      case "INCREMENT5":
        return { ...initialState, count: state.count + action.payload };
      default:
        return state.count;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  //   console.log("statestatestate", state);

  return (
    <div>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 2 })}>
        Increment by one
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT5", payload: 5 })}>
        Increment by five
      </button>
    </div>
  );
}

export default UseReducer;
