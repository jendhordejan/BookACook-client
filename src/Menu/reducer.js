import { MENU_NEW_CREATED, MENU_ALL_BY_USER } from "./action";

const initialState = {
  menus: [],
  newMenu: {}
};

export default (state = initialState, { type, payload }) => {
  console.log(`TYPE: ${type} || MENU PAYLOAD: ${payload}`);
  switch (type) {
    case MENU_NEW_CREATED:
      return {
        ...state,
        menus: [state.menus, { ...payload }],
        newMenu: payload
      };
    case MENU_ALL_BY_USER:
      console.log("this is the PAYLOD FOR MENU_ALL_BY_USER: ", payload);
      // return { menus: payload };
      return {
        ...state,
        menus: [...state.menus, payload]
      };

    default:
      return state;
  }
};
