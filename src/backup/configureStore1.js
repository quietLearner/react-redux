import { createStore, applyMiddleware } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "../store/bugs";
import logger from "../store/middleware/logger";

export default function configureStore() {
  const store = createStore(
    reducer,
    applyMiddleware(logger),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    devToolsEnhancer({ trace: true })
  );
  return store;
}
