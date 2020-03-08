import axios from 'axios'
export const SIGNED_UP = 'user/SIGNED_UP'


export function userSignUp(firstName, lastName, email, password, imageUrl, houseNo, postCode, about) {
    const userData = {email, password}
    const userProfileData = { imageUrl, firstName, lastName, houseNo, postCode, about}
    const fullUserData = {userData, userProfileData}
    console.log("userData: ", userData)
    console.log("userProfileData: ", userProfileData)
    return (dispatch, getState) => {
      axios
        .post("http://localhost:5000/user/signup", fullUserData)
        .then((
          resp //console.log("User Signup data:", resp.data)
        ) => dispatch(userSignUpSucess(resp.data)))
        .catch(error => console.error("error", error));
    };
  }



function userSignUpSucess(responseData){
    console.log(responseData);
    const { firstName, lastName, email, password, imageUrl, houseNo, postCode, about } = responseData;
    return {   
        type: SIGNED_UP,
        payload: {
            user: {
                email: email,
                token: password,
            },
            user_profile: {
                imageUrl: imageUrl,
                firstName: firstName,
                lastName: lastName,
                houseNo: houseNo,
                postCode: postCode,
                about: about
            }
        }
      };
}