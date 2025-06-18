import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.count);
  const loggedIn = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Redux DevTools Demo</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: "PLUS" })}>+</button>
      <button onClick={() => dispatch({ type: "MINUS" })}>-</button>
      <br /><br />
      <button onClick={() => dispatch({ type: "LOGIN" })}>Login</button>
      <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
      <h2>Logged In: {loggedIn.toString()}</h2>
    </div>
  );
}

export default App;
