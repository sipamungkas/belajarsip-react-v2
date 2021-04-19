import { SHOW_NOTIFICATION, SHOW_MESSAGE, SHOW_SIDEBAR } from "./actionTypes";

export const toggleNotification = (value) => {
  return {
    type: SHOW_NOTIFICATION,
    payload: value,
  };
};

export const toggleSidebar = (value) => {
  return {
    type: SHOW_SIDEBAR,
    payload: value,
  };
};

export const toggleMessage = (value) => {
  return {
    type: SHOW_MESSAGE,
    payload: value,
  };
};
