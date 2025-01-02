import { combineReducers } from "redux";
import { reducerCounter } from "./CounterReducer";

export const reducer = combineReducers({ counterReducer: reducerCounter });
