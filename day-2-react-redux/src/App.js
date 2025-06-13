import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  // useSelector lets us read data from Redux store
  const count = useSelector((state) => state.count);

  // useDispatch lets us send actions to Redux store
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>
      {/* Dispatch action to increment count */}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      {/* Dispatch action to decrement count */}
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}

export default App;
