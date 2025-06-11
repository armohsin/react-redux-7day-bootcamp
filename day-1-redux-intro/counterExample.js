const { createStore } = require('redux');

// Reducer
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Store
const store = createStore(counterReducer);

// Listener
store.subscribe(() => {
  console.log('State changed:', store.getState());
});

// Dispatching Actions
store.dispatch({ type: 'INCREMENT' }); // count: 1
store.dispatch({ type: 'INCREMENT' }); // count: 2
store.dispatch({ type: 'DECREMENT' }); // count: 1
