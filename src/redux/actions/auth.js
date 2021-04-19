import axios from "axios";
import { SET_ERROR, SET_USER } from "./actionTypes";

const BASE_URL = process.env.REACT_APP_API;

export const loginHandler = (username, password) => {
  return (dispatch) => {
    return axios
      .post(`${BASE_URL}/v1/auth/login`, {
        username,
        password,
      })
      .then((res) => {
        dispatch({
          type: SET_USER,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_ERROR,
          payload: err,
        });
      });
  };
};
