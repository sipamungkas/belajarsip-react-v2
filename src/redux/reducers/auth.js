import {
  SET_USER,
  SET_ERROR,
  SET_LOADING,
  LOGOUT,
} from "../actions/actionTypes";

const initialState = {
  // user: {
  //   avatar: "avatars/avatar-18-1617841017228.png",
  //   id: 18,
  //   name: "Burhan si Instructors",
  //   username: "burhan",
  //   role_id: 1,
  //   token:
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxOCwibmFtZSI6IkJ1cmhhbiBzaSBJbnN0cnVjdG9ycyIsInJvbGVfaWQiOjEsImlhdCI6MTYxODg4MzIyNSwiZXhwIjoxNjE4OTY5NjI1LCJpc3MiOiJCRUxBSkFSU0lQIn0.0hBfhMKe8gm-2OO6pcLdt0a9om65IXgEYs_rY040Ukw",
  // },
  // isLoggedIn: true,
  // isError: false,
  // isLoading: false,
  user: {},
  isLoggedIn: false,
  isError: false,
  isLoading: false,
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
    case LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
