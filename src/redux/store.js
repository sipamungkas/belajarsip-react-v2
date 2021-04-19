import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import ReduxThunx from "redux-thunk";

import { userReducer } from "./reducers/user";
import { sidebarReducer } from "./reducers/sidebar";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// development mode
const enhancers = composeEnhancers(applyMiddleware(ReduxThunx));

// production mode
// const enhancers = applyMiddleware(ReduxThunx);
const reducers = combineReducers({ userReducer, sidebarReducer });

const reduxStore = createStore(reducers, enhancers);

export default reduxStore;
