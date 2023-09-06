import { combineReducers } from "redux";
//for access function in app.action.js
import appReducer from "./app.reducer";
import box1Reducer from "./box1.reducer";
export default combineReducers({appReducer:appReducer,box1Reducer:box1Reducer})