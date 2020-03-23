import {
  USER_SIGNED_UP,
  USERPROFILE_SIGNED_UP,
  USERADDRESS_SIGNED_UP
} from "./action";

const initialState = {
  jwt: "",
  user: {},
  userProfile: {},
  userAddress: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_SIGNED_UP:
      return { ...state, jwt: payload.jwt, user: payload.user };
    case USERPROFILE_SIGNED_UP:
      return { ...state, userProfile: payload.userProfile };
    case USERADDRESS_SIGNED_UP:
      return { ...state, userAddress: payload.userAddress };
    default:
      return state;
  }
};
