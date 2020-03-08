import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

import SignupDetails from "./SignupDetails";
import AddressForm from "./AddressForm";
import ReviewSignUp from "./ReviewSignup";

export default class SignupForm extends Component {
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
    verifiedAddress: "",
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
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
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
