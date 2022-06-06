import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { infoReducer } from "./customReducer";


export const store = createStore(infoReducer, composeWithDevTools(applyMiddleware(thunk)));
