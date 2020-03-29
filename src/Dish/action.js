import instance from "../axios";

export const DISH_NEW_CREATED = "dish/CREATED";
export const DISH_GET_ALL = "dish/ALL";

//create new menu table: menu
export function dishCreate(dishData) {
  console.log("inside dishCreate data", dishData);

  return async (dispatch, getState) => {
    try {
      const responseData = await instance.post(`/dish`, dishData);
    } catch (error) {
      throw error;
    }
  };
}

//fetch all dishes component: Dashboard.js

// export function dishGetAll() {
//   console.log("inside dishGetAll");

//   return async (dispatch, getState) => {
//     try {
//       const { dishes } = getState;

//       if (!dishes) {
//         const responseData = await instance.get()
//       }
//     } catch (error) {
//       throw error;
//     }
//   };
// }
