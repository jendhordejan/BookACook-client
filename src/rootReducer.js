import { combineReducers } from "redux";
import userReducer from "./UserCook/reducer";
export default combineReducers({
  // your reducers will go here
  user: userReducer
});
