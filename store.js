import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import { persistedReducer } from "./persistConfig";
import { thunk } from "redux-thunk";

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
