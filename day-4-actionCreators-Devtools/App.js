import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login, logout } from "./actions";

function App() {
  const count = useSelector((state) => state.count);
  const isLoggedIn = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Redux - Day 4</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h2>Logged In: {isLoggedIn ? "Yes" : "No"}</h2>
      <button onClick={() => dispatch(login())}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default App;
