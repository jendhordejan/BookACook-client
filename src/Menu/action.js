import instance from "../axios";

export const MENU_NEW_CREATED = "menu/CREATED";

//create new menu table: menu
export function menuCreate(menuData) {
  console.log("inside menuCreate data", menuData);

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
