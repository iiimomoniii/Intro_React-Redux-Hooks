import { combineReducers } from "redux";
//for access function in app.action.js
import appReducer from "./app.reducer";
export default combineReducers({appReducer:appReducer})