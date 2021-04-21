import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./auth";
import { sidebarReducer } from "./sidebar";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authReducer"],
};

const rootReducer = combineReducers({ authReducer, sidebarReducer });

export default persistReducer(persistConfig, rootReducer);
