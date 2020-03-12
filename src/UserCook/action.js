import instance from "../axios";

export const USER_SIGNED_UP = "user/SIGNED_UP";
export const USERPROFILE_SIGNED_UP = "userProfile/SIGNED_UP";
export const USERADDRESS_SIGNED_UP = "userAddress/SIGNED_UP";

export const LOGIN_SUCCESS = "user/LOGIN_SUCCESS";

// signup - table: user
export function userSignUp(userData) {
  return async (dispatch, getState) => {
    console.log("INSTANCE: ", instance);
    try {
      const responseData = await instance.post(`/user/signup`, userData);
      // axios.post(`${baseUrl}/user/signup`, userData);

      dispatch(userSignUpSucess(responseData.data));
    } catch (error) {
      throw error;
    }
  };
}

function userSignUpSucess(respData) {
  return {
    type: USER_SIGNED_UP,
    payload: respData
  };
}

// signup - table: user_profile
export function userProfileSignUp(userProfileData) {
  return async (dispatch, getState) => {
    try {
      const responseData = await instance.post(
        `/userprofile/signup`,
        userProfileData
      );

      dispatch(userProfileSignUpSucess(responseData.data));
    } catch (error) {
      throw error;
    }
  };
}

function userProfileSignUpSucess(respData) {
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
      const responseData = await instance.post(
        `/useraddress/signup`,
        userAddressData
      );

      dispatch(userAddressSignUpSucess(responseData.data));
    } catch (error) {
      throw error;
    }
  };
}

function userAddressSignUpSucess(respData) {
  console.log("respData: ", respData);
  return {
    type: USERADDRESS_SIGNED_UP,
    payload: respData
  };
}

// signup - table: user_address
export function userLogin(userLoginData, history) {
  console.log("userLoginData: ", userLoginData);

  return async (dispatch, getState) => {
    try {
      const responseData = await instance.post(`/user/login`, userLoginData);

      console.log("responseData: ", responseData);
      dispatch(userLoginSucess(responseData.data));
      history.push("/dashboard");
    } catch (error) {
      throw error;
    }
  };
}

function userLoginSucess(respData) {
  console.log("respData in userLoginSuccess: ", respData);
  return {
    type: LOGIN_SUCCESS,
    payload: respData
  };
}
