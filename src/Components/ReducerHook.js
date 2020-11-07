import React, { useReducer } from "react";

function ReducerHook() {
  const initialState = {
    val1: 8,
    val2: 12,
    val3: 15
  };
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return {
          ...state,
          val1: state.val1 + 1
        };
      case "decrement":
        return {
          ...state,
          val3: state.val3 - 1
        };
      case "reset":
        return {
          ...state,
          val2: state.val2 - 1
        };
      default:
        return state;
    }
  };

  const [intVal, dispatch] = useReducer(reducer, initialState);
  console.log(intVal);
  return (
    <div>
      <div>Count1 : - {intVal.val1}</div>
      <div>Count2 : - {intVal.val2}</div>
      <div>Count3 : - {intVal.val3}</div>

      <button onClick={() => dispatch("increment")}>Incriment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default ReducerHook;
