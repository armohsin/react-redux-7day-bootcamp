import { createStore } from 'redux';

// Initial state of our application
const initialState = { count: 0 };

// Reducer function takes current state and an action, returns new state
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }; // Increase count
    case 'DECREMENT':
      return { count: state.count - 1 }; // Decrease count
    default:
      return state; // Return current state if action type doesn't match
  }
};

// Create the Redux store using the reducer
const store = createStore(counterReducer);

export default store;
