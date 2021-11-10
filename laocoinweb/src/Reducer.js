import { combineReducers } from "redux";
import Login from "./api/reducer/loginReducer";

export default combineReducers({
    login: Login
})