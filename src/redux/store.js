import { createStore, applyMiddleware, combineReducers } from "redux";
// import { createLogger } from "redux-logger";
// import rpm from "redux-promise-middleware";
// import thunx from "redux-thunk";

import { userReducer } from "./reducers/user";
import { sidebarReducer } from "./reducers/sidebar";

// const logger = createLogger();
// const enhancers = applyMiddleware(logger);
const reducers = combineReducers({ userReducer, sidebarReducer });

const reduxStore = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default reduxStore;
