import axios from "axios";
import { SET_ERROR, SET_LOADING, SET_USER } from "./actionTypes";
import { BASE_URL } from "../../constant";

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
        console.log(res.data.data);
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
