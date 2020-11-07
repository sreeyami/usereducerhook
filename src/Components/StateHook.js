import React, { useState } from "react";

function StateHook() {
  const name = {
    val1: 40
  };
  const [intVal, setintVal] = useState(name);

  const oneChangHandler = () => {
    setintVal(intVal.val1 + 10);
  };

  return (
    <div>
      <div>{intVal.val1}</div>
      <button onClick={oneChangHandler}>Incriment1</button>
    </div>
  );
}

export default StateHook;
