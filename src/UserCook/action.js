import axios from "axios";
export const USER_SIGNED_UP = "user/SIGNED_UP";
export const USERPROFILE_SIGNED_UP = "userProfile/SIGNED_UP";
export const USERADDRESS_SIGNED_UP = "userAddress/SIGNED_UP";

const baseUrl = "http://localhost:5000";

// signup - table: user
export function userSignUp(userData) {
  return async (dispatch, getState) => {
    try {
      const responseData = await axios.post(`${baseUrl}/user/signup`, userData);

      dispatch(userSignUp_Sucess(responseData.data));
    } catch (error) {
      throw error;
    }
  };
}

function userSignUp_Sucess(respData) {
  return {
    type: USER_SIGNED_UP,
    payload: respData
  };
}

// signup - table: user_profile
export function userProfileSignUp(userProfileData) {
  return async (dispatch, getState) => {
    try {
      const responseData = await axios.post(
        `${baseUrl}/userprofile/signup`,
        userProfileData
      );

      dispatch(userProfileSignUp_Sucess(responseData.data));
    } catch (error) {
      throw error;
    }
  };
}

function userProfileSignUp_Sucess(respData) {
  return {
    type: USERPROFILE_SIGNED_UP,
    payload: respData
  };
}

// signup - table: user_address
export function userAddressSignUp(userAddressData) {
  console.log("userData: ", userAddressData);

  return async (dispatch, getState) => {
    try {
      const responseData = await axios.post(
        `${baseUrl}/useraddress/signup`,
        userAddressData
      );

      dispatch(userAddressSignUp_Sucess(responseData.data));
    } catch (error) {
      throw error;
    }
  };
}

function userAddressSignUp_Sucess(respData) {
  console.log("respData: ", respData);
  return {
    type: USERADDRESS_SIGNED_UP,
    payload: respData
  };
}
