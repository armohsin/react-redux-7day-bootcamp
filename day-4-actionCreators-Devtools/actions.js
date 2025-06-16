// Action creators for Redux
import { PLUS, MINUS, LOGIN, LOGOUT } from "./types";

export const increment = () => ({ type: PLUS });
export const decrement = () => ({ type: MINUS });
export const login = () => ({ type: LOGIN });
export const logout = () => ({ type: LOGOUT });
