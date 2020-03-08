import React, { Component } from "react";
import FormUserDetails from "./FormUserProfile";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import { userSignUp } from "../UserCook/action";
import { connect } from "react-redux";
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
// import { makeStyles } from "@material-ui/core/styles";

class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    imageUrl: "",
    houseNo: "",
    postCode: "",
    about: "",
    verifiedAddress: false,
    address: null
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = state => {
    const {
      firstName,
      lastName,
      email,
      password,
      imageUrl,
      houseNo,
      postCode,
      about
    } = this.state;
    this.props.userSignUp(
      firstName,
      lastName,
      email,
      password,
      imageUrl,
      houseNo,
      postCode,
      about
    );
  };

  handleVerifyAddress = async () => {
    console.log(
      `house no: ${this.state.houseNo} | post code: ${this.state.postCode}`
    );
    // const addressData = this.props.verifyAddress(this.state.houseNo,this.state.postCode)
    // console.log("addressData: ", addressData);
    console.log("this.state BEFORE VERIFY ADDRESS", this.state);
    try {
      const addressData = await axios.get(
        `http://api.postcodedata.nl/v1/postcode/?postcode=${this.state.postCode}&streetnumber=${this.state.houseNo}&ref=domeinnaam.nl&type=json`
      );

      this.setState({
        verifiedAddress: true,
        address: addressData.data.details[0]
      });
      console.log("this.state", this.state);
    } catch (error) {
      throw error;
    }
  };

  render() {
    const { step } = this.state;
    // const { firstName, lastName, email, password, imageUrl, houseNo, postCode, about } = this.state;
    // const values = { firstName, lastName, email, password, imageUrl, houseNo, postCode, about };

    switch (step) {
      case 1:
        return (
          <>
            <CssBaseline />
            <h1>Let's get started</h1>
            <FormUserDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={this.state}
            />
          </>
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleVerifyAddress={this.handleVerifyAddress}
            values={this.state}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={this.state}
          />
        );
      case 4:
        return (
          <>
            {this.handleSubmit(this.state)}
            <Success />
          </>
        );
    }
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { userSignUp })(UserForm);
