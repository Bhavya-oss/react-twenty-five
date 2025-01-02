import { applyMiddleware, createStore } from "redux";
import { reducer } from "./ReducerCombine";
import { thunk } from "redux-thunk";

export const store = createStore(reducer, applyMiddleware(thunk));
