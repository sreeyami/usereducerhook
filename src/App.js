import React from "react";
import "./style.css";
import StateHook from "./Components/StateHook";
import ReducerHook from "./Components/ReducerHook";

export default function App() {
  return (
    <div>
      <div>USE STATE HOOK </div>
      <StateHook />

      <div style={{ marginTop: "50px" }}>USE REDUCER HOOK </div>
      <ReducerHook />
    </div>
  );
}
