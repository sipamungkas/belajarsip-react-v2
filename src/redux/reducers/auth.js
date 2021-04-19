import { SET_USER, SET_ERROR, SET_LOADING } from "../actions/actionTypes";

const initialState = {
  user: {
    avatar: "avatars/avatar-1-1618295238361.png",
    id: 1,
    name: "Ragil Student",
    username: "ragil",
    role_id: 2,
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJuYW1lIjoiUmFnaWwgU3R1ZGVudCIsInJvbGVfaWQiOjIsImlhdCI6MTYxODg0NTk4OSwiZXhwIjoxNjE4OTMyMzg5LCJpc3MiOiJCRUxBSkFSU0lQIn0.UnqCQG7i3s6yiHXfmkbv64jbI-lDTJ8K3QgxFQGgFng",
  },
  isLoggedIn: true,
  isError: false,
  isLoading: false,
  // user: {},
  // isLoggedIn: false,
  // isError: false,
  // isLoading: false,
  error: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        isError: false,
        isLoading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoggedIn: false,
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
