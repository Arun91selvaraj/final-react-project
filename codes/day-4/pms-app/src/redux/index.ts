import { applyMiddleware, legacy_createStore } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer } from "./reducers";

const loggerMiddleware = createLogger()
export const appStore = legacy_createStore(
    productsReducer,
    composeWithDevTools(applyMiddleware(loggerMiddleware))
)