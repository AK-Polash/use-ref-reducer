import React, { useReducer } from "react";
import "./useReducerDemo.css";

let initialState = {
  count: 0,
  name: "A.K. Polash",
};

let reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      if (state.count < 10) {
        return {
          ...initialState,
          count: state.count + action.payload,
        };
      }

    case "DECREMENT":
      if (state.count > 0) {
        return {
          ...initialState,
          count: state.count - action.payload,
        };
      }

    default:
      return state;
  }
};

const UseReducerDemo = () => {
  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1> {state.name} </h1>

      <button
        onClick={() => dispatch({ type: "INCREMENT", payload: 2 })}
        className="btn"
      >
        +
      </button>

      <h1> {state.count} </h1>

      <button
        onClick={() => dispatch({ type: "DECREMENT", payload: 2 })}
        className="btn"
      >
        -
      </button>
    </>
  );
};

export default UseReducerDemo;
