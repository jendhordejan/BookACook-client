import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import SignupDetails from "./SignupDetails";
import AddressForm from "./AddressForm";

export default class SignupForm extends Component {
  state = {
    activeStep: 0,
    firstName: "jend",
    lastName: "hordejan",
    email: "hello",
    password: "pass",
    confirmPassword: "pass",
    imageUrl:
      "https://media.istockphoto.com/vectors/colorful-brown-circle-chef-logo-vector-id1056400912",
    houseNo: "",
    postCode: "",
    about: "",
    verifiedAddress: "",
    address: ""
  };

  render() {
    const steps = [
      "SignIn details",
      "Personal details",
      "Review your registration"
    ];

    function getStepContent(step, handleChange, values) {
      switch (step) {
        case 0:
          return <SignupDetails handleChange={handleChange} values={values} />;

        case 1:
          //   return <PaymentForm />;
          return (
            <AddressForm
              handleChange={handleChange}
              values={values}
              handleImageUrlChange={handleImageUrlChange}
            />
          );
        case 2:
          //   return <Review />;
          return <AddressForm />;
        default:
          throw new Error("Unknown step");
      }
    }

    const handleImageUrlChange = value => {
      console.log("Lets finally set the IMAGEURL:", value);

      this.setState({ imageUrl: value });
      console.log(
        "let's check imageURL from SignupForm: ",
        this.state.imageUrl
      );
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

    const { classes } = this.props;
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
                  this.state
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
                      ? "Place order"
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
