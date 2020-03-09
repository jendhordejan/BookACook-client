import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import SignupDetails from "./SignupDetails";
import AddressForm from "./AddressForm";
import ReviewSignUp from "./ReviewSignup";
// import Success from "./Success";
import { Link } from "react-router-dom";

import {
  userSignUp,
  userProfileSignUp,
  userAddressSignUp
} from "../../UserCook/action";
// import userProfileSignUp from "../../UserCook/action";

import { connect } from "react-redux";
import axios from "axios";

class SignupForm extends Component {
  state = {
    activeStep: 0,
    firstName: "Jend",
    lastName: "Hordejan",
    email: "jendhordejan@gmail.com",
    password: "pass",
    confirmPassword: "pass",
    imageUrl:
      "https://media.istockphoto.com/vectors/colorful-brown-circle-chef-logo-vector-id1056400912",
    houseNo: "8",
    postCode: "3511VD",
    about:
      "Hi! I always find joy to watch people enjoy the food that I prepare. :)",
    verifiedAddress: false,
    address: ""
  };

  render() {
    const steps = [
      "SignIn details",
      "Personal details",
      "Review your registration"
    ];

    function getStepContent(
      step,
      handleChange,
      values,
      classesProfile,
      imageClasses
    ) {
      // classesProfile, imageClasses - style for personalprofile to be passed as props
      console.log("STEP: ", steps[step]);
      switch (step) {
        case 0:
          return <SignupDetails handleChange={handleChange} values={values} />;
        case 1:
          return (
            <AddressForm
              handleChange={handleChange}
              values={values}
              handleImageUrlChange={handleImageUrlChange}
              handleVerifyAddress={handleVerifyAddress}
              classesProfile={classesProfile}
              imageClasses={imageClasses}
            />
          );
        case 2:
          return (
            <ReviewSignUp
              values={values}
              classes={classes}
              classesProfile={classesProfile}
              imageClasses={imageClasses}
            />
          );
        default:
          throw new Error("Unknown step");
      }
    }

    const handleImageUrlChange = value => {
      this.setState({ imageUrl: value });
    };

    const handleChange = input => e => {
      this.setState({ [input]: e.target.value });
    };

    const handleNext = () => {
      console.log(
        `handleNext activeStep: ${this.state.activeStep} || steps.length: ${steps.length}`
      );
      if (this.state.activeStep === steps.length - 1) {
        console.log("Let's submit");
        handleSubmit(this.state);
      }
      this.setState({ activeStep: this.state.activeStep + 1 });
    };

    const handleBack = () => {
      this.setState({ activeStep: this.state.activeStep - 1 });
    };

    const handleVerifyAddress = async () => {
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

    const resetState = () => {
      this.setState({
        activeStep: 0,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        imageUrl:
          "https://media.istockphoto.com/vectors/colorful-brown-circle-chef-logo-vector-id1056400912",
        houseNo: "",
        postCode: "",
        about: "",
        verifiedAddress: false,
        address: ""
      });
    };

    const handleSubmit = async stateValues => {
      console.log("INSIDE HANDLE SUBMIT. Let's check the local: ", this.state);
      await this.props.userSignUp(this.state);

      console.log("THIS.PROPS: ", this.props.user);
      const userId = this.props.user.id;
      const {
        imageUrl,
        firstName,
        lastName,
        houseNo,
        postCode,
        about
      } = this.state;
      const userProfileData = {
        imageUrl,
        firstName,
        lastName,
        houseNo,
        postCode,
        about,
        userId
      };
      //construct data to be saved in userProfile
      this.props.userProfileSignUp(userProfileData);

      const {
        street,
        city,
        municipality,
        province,
        postcode,
        pnum,
        pchar,
        rd_x,
        rd_y,
        lat,
        lon
      } = this.state.address;
      const houseno = this.state.houseNo;

      //construct data to be saved in userAddress
      const userAddressData = {
        street,
        city,
        municipality,
        province,
        houseno,
        postcode,
        pnum,
        pchar,
        rd_x,
        rd_y,
        lat,
        lon,
        userId
      };

      this.props.userAddressSignUp(userAddressData);
    };

    const { classes, classesProfile, imageClasses } = this.props;
    return (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Registration
          </Typography>
          <Stepper
            activeStep={this.state.activeStep}
            className={classes.stepper}
          >
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {this.state.activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for registering.
                </Typography>
                <Typography variant="subtitle1">
                  We have emailed your registration confirmation, please cick{" "}
                  <Link to="/home">here</Link> to go to home page
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(
                  this.state.activeStep,
                  handleChange,
                  this.state,
                  classesProfile,
                  imageClasses
                )}
                <div className={classes.buttons}>
                  {this.state.activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {this.state.activeStep === steps.length - 1
                      ? "Submit"
                      : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    user: reduxState.user.user
  };
}

export default connect(mapStateToProps, {
  userSignUp,
  userProfileSignUp,
  userAddressSignUp
})(SignupForm);
