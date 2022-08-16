import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";
// import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "react-saga";

import { rootSaga } from "./root-saga";

const persisitConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const persistedReducer = persistReducer(persisitConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  process.env.NODE_ENV !== "PRODUCTION" && logger,
  sagaMiddleware,
].filter(Boolean);

const composeEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
