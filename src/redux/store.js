import { createStore, applyMiddleware, compose } from "redux";
import persistStore from "redux-persist/lib/persistStore";
import ReduxThunk from "redux-thunk";

import rootReducer from "./reducers/root";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// development mode
const enhancers = composeEnhancers(applyMiddleware(ReduxThunk));

// production mode
// const enhancers = applyMiddleware(ReduxThunx);

const store = createStore(rootReducer, enhancers);

const persistor = persistStore(store);

const storeWithPersistor = { store, persistor };

export default storeWithPersistor;
