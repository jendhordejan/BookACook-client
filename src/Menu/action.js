import instance from "../axios";
import axios from "axios";

export const MENU_NEW_CREATED = "menu/CREATED";

//create new menu table: menu
export function menuCreate(menuData) {
  return async (dispatch, getState) => {
    try {
      const responseData = await instance.post(`/menu`, menuData);

      console.log("responseData menuCreate:", responseData);

      dispatch(menuCreateNewSuccess(responseData.data.menu));
    } catch (error) {
      throw error;
    }
  };
}

function menuCreateNewSuccess(respData) {
  return {
    type: MENU_NEW_CREATED,
    payload: respData
  };
}

export function menuGetByUserId(userId) {
  console.log("inside menuGetByUserId userId", userId);
  const id = userId;
  return async (dispatch, getState) => {
    try {
      const responseData = await instance.get(`/menus/${id}`);
    } catch (error) {
      throw error;
    }
  };
}
