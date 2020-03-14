import { combineReducers } from "redux";

import userReducer from "./UserCook/reducer";
import menuReducer from "./Menu/reducer";
import dishReducer from "./Dish/reducer";

export default combineReducers({
  // your reducers will go here
  user: userReducer,
  menus: menuReducer
  // dishes: dishReducer.dishes
});
