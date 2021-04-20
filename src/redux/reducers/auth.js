import { SET_USER, SET_ERROR, SET_LOADING } from "../actions/actionTypes";

const initialState = {
  user: {
    avatar: "avatars/avatar-18-1617841017228.png",
    id: 18,
    name: "Burhan si Instructors",
    username: "burhan",
    role_id: 1,
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxOCwibmFtZSI6IkJ1cmhhbiBzaSBJbnN0cnVjdG9ycyIsInJvbGVfaWQiOjEsImlhdCI6MTYxODg4MDg0MiwiZXhwIjoxNjE4OTY3MjQyLCJpc3MiOiJCRUxBSkFSU0lQIn0.sEQN5saSk5t5VzF2_Ms6d1_DT_suoRrcVwjQtijEVwA",
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
