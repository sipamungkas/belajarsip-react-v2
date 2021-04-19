import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import ReduxThunk from "redux-thunk";

import { authReducer } from "./reducers/auth";
import { sidebarReducer } from "./reducers/sidebar";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// development mode
const enhancers = composeEnhancers(applyMiddleware(ReduxThunk));

// production mode
// const enhancers = applyMiddleware(ReduxThunx);

const reducers = combineReducers({ authReducer, sidebarReducer });

const reduxStore = createStore(reducers, enhancers);

export default reduxStore;
