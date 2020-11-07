import React from "react";
import "./style.css";
import StateHook from "./Components/StateHook";
import ReducerHook from "./Components/ReducerHook";
import UserDetils from "./Components/UserDetils";

export default function App() {
  return (
    <div>
      <div>USE STATE HOOK </div>
      <StateHook />

      <div style={{ marginTop: "50px" }}>USE REDUCER HOOK </div>
      <ReducerHook />
      <div
        style={{ marginTop: "50px", border: "2px solid red", padding: "30px" }}
      >
        <div>USE FORM </div>
        <UserDetils />
      </div>
    </div>
  );
}
