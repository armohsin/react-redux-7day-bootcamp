import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const value = useSelector((state) => state.count);
  const loggedIn = useSelector((state) => state.loggedIn);

  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Redux Counter</h1>
      <h2>{value}</h2>
      <button onClick={() => dispatch({ type: "PLUS" })}>+</button>
      <button onClick={() => dispatch({ type: "MINUS" })}>-</button>

      <h1>Login Controls</h1>
      <button onClick={() => dispatch({ type: "LOGIN" })}>Login</button>
      <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>

      <h1>Login Status</h1>
      <h2>{loggedIn ? "✅ Logged In" : "❌ Logged Out"}</h2>
    </div>
  );
}

export default App;
