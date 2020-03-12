import instance from "../axios";

export const DISH_NEW_CREATED = "dish/CREATED";

//create new menu table: menu
export function dishCreate(dishData) {
  console.log("inside dishCreate data", dishData);

  return async (dispatch, getState) => {
    try {
      const responseData = await instance.post(`/dish`, dishData);

      // dispatch(dishCreateSuccess(responseData.data.menu));
    } catch (error) {
      throw error;
    }
  };
}

//   function dishCreateSuccess(respData) {
//     return {
//       type: MENU_NEW_CREATED,
//       payload: respData
//     };
//   }
