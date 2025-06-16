import { createStore } from "redux";

const initialState = {
  count: 0,
  loggedIn: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLUS':
      return { ...state, count: state.count + 1 };
    case 'MINUS':
      return { ...state, count: state.count - 1 };
    case 'LOGIN':
      return { ...state, loggedIn: true };
    case 'LOGOUT':
      return { ...state, loggedIn: false };
    default:
      return state;
  }
};

const store = createStore(appReducer);

export default store;
