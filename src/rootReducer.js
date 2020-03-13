import { combineReducers } from "redux";

import userReducer from "./UserCook/reducer";
import menuReducer from "./Menu/reducer";

export default combineReducers({
  // your reducers will go here
  user: userReducer,
  menus: menuReducer
});
