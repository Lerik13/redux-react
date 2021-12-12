import { createStore, combineReducers, applyMiddleware } from "redux";
//import { cashReducer } from "./cashReducer";
//import { customerReducer } from "./customerReducer";
import { countReducer } from "./countReducer";
import { userReducer } from "./userReducer";
//import { composeWithDevTools } from "redux-devtools-extension";
//import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
	countReducer,
	userReducer
	//cash: cashReducer,
	//customers: customerReducer
})
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)

//export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))