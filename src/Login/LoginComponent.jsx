import React from "react";

//email and password
export const Login = ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="email"
        id="email"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        placeholder="password"
        id="password"
        onChange={handleChange}
      />
      <br />
      <button> Login </button>
    </form>
  );
};
