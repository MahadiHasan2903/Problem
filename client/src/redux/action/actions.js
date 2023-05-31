// authActions.js

import axios from "axios";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

export const register = (name, email, password) => async (dispatch) => {
  try {
    const response = await axios.post("/register", { name, email, password });
    dispatch({ type: REGISTER_SUCCESS, payload: response.data.token });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error.response.data.message });
  }
};

// Login action creator
export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post("/login", { email, password });
    dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

// Logout action creator
export const logout = () => ({ type: LOGOUT });
