import React, { useState } from "react";

function StateHook() {
  const [intVal, setintVal] = useState(0);

  return (
    <div>
      <div>{intVal}</div>
      <button onClick={() => setintVal(intVal + 1)}>Incriment</button>
      <button onClick={() => setintVal(intVal - 1)}>Decrement</button>
      <button onClick={() => setintVal(0)}>Reset</button>
    </div>
  );
}

export default StateHook;
