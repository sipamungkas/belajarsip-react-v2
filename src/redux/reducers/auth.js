import { SET_USER, SET_ERROR } from "../actions/actionTypes";

const initialState = {
  // user: {
  //   id: 1,
  //   name: "ragil",
  //   username: "asd",
  //   role_id: 1,
  //   token:
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJuYW1lIjoicmFnaWwiLCJyb2xlX2lkIjoyLCJpYXQiOjE2MTczNzI0OTIsImV4cCI6MTYxNzQ1ODg5Mn0.bDTYdgpKyaTocwwkFGK3vJAKj6UaHNBOOkGKKSptfVw",
  // },
  user: {},
  isLoggedIn: false,
  error: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
