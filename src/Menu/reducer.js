import { MENU_NEW_CREATED } from "./action";

const initialState = {
  menus: [{ title: "this is title", description: "this desc" }],
  newMenu: {}
};

export default (state = initialState, { type, payload }) => {
  // console.log(`TYPE: ${type} || PAYLOAD: ${payload}`);
  switch (type) {
    case MENU_NEW_CREATED:
      return {
        ...state,
        menus: [...state.menus, { ...payload }],
        newMenu: payload
      };
    default:
      return state;
  }
};
