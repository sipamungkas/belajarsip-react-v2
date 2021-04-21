import axios from "axios";
import { LOGOUT, SET_ERROR, SET_LOADING, SET_USER } from "./actionTypes";
// import { BASE_URL } from "../../constant";

const BASE_URL = process.env.REACT_APP_API;

export function loginHandler(username, password) {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING,
    });
    axios
      .post(`${BASE_URL}/v1/auth/login`, {
        username,
        password,
      })
      .then((res) => {
        dispatch({ type: SET_USER, payload: res.data.data });
      })
      .catch((err) => {
        dispatch({
          type: SET_ERROR,
          payload: err,
        });
      });
  };
}

export function logoutHandler() {
  return (dispatch) => {
    dispatch({ type: LOGOUT });
  };
}
