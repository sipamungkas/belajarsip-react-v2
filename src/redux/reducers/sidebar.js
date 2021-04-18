const initialState = {
  showNotification: false,
  showMessage: false,
};

export const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_NOTIFICATION":
      return {
        ...state,
        showNotification: action.payload,
      };
    case "SHOW_MESSAGE":
      return {
        ...state,
        showMessage: action.payload,
      };

    default:
      return state;
  }
};
