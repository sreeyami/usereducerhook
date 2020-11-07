import React, { useState } from "react";

function UserDetils() {
  const [form, setForm] = useState({
    username: "",
    department: "",
    role: ""
  });

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const subAction = () => {
    console.log(form)
  }

  return (
    <div>
      <label for="username">User Name:</label>
      <input
        onChange={changeHandler}
        type="text"
        name="username"
        id="username"
        value={form.name}
      />{" "}
      <br />
      <br />
      <label for="department">Department:</label>
      <input
        type="text"
        onChange={changeHandler}
        name="department"
        id="department"
        value={form.department}
      />
      <br />
      <br />
      <label for="role">Role:</label>
      <input
        type="text"
        onChange={changeHandler}
        name="role"
        id="role"
        value={form.role}
      />
      <br />
      <br />
      <button onClick={subAction}>Submit</button>
    </div>
  );
}
export default UserDetils;
