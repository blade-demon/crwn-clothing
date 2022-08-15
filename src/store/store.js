import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";
import thunkMiddleware from "redux-thunk";

const persisitConfig = {
  key: "root",
  storage,
  blacklist: ["cart"],
};
const persistedReducer = persistReducer(persisitConfig, rootReducer);

const middlewares = [thunkMiddleware, logger];

const composeEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(store);
