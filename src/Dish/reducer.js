import { DISH_NEW_CREATED, DISH_GET_ALL } from "./action";

const initialState = {
  dishes: [],
  dish: {}
};

export default (state = initialState, { type, payload }) => {
  // console.log(`TYPE: ${type} || PAYLOAD: ${payload}`);
  switch (type) {
    case DISH_NEW_CREATED:
      return {
        ...state,
        dishes: [state.dishes, { ...payload }],
        dish: payload
      };
    case DISH_GET_ALL:
      console.log("this is the PAYLOD FOR DISH_GET_ALL: ", payload);
      // return { menus: payload };
      return {
        ...state,
        dishes: [...state.dishes, payload]
      };
    default:
      return state;
  }
};
