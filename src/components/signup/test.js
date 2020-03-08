import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import SignupDetails from "./SignupDetails";
import AddressForm from "./AddressForm";
// import PaymentForm from "./PaymentForm";
// import Review from "./Review";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

// const steps = [
//   "SignIn details",
//   "Personal details",
//   "Review your registration"
// ];

// function getStepContent(step, handleChange, values, handleImageUrlChange) {
//   switch (step) {
//     case 0:
//       return <SignupDetails handleChange={handleChange} values={values} />;

//     case 1:
//       //   return <PaymentForm />;
//       return (
//         <AddressForm
//           handleChange={handleChange}
//           values={values}
//           handleImageUrlChange={handleImageUrlChange}
//         />
//       );
//     case 2:
//       //   return <Review />;
//       return <AddressForm />;
//     default:
//       throw new Error("Unknown step");
//   }
// }

export default function SignupForm() {
  const [image, setImage] = useState("");
  const [firstName, setFirstName] = useState("J");
  const [lastName, setLastName] = useState("H");
  const [email, setEmail] = useState("j@gmail");
  const [password, setPassword] = useState("pass");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [postCode, setPostCode] = useState("");
  const [about, setAbout] = useState("");
  const [verifiedAddress, setVerifiedAddress] = useState(false);
  const [address, setAddress] = useState(null);

  const values = {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    imageUrl,
    houseNo,
    postCode,
    about,
    verifiedAddress,
    address
  };

  const handleChange = input => e => {
    // this.setState({ [input]: e.target.value });
    // setImage(file.secure_url);
    console.log(`input: ${input} | value ${e.target.value}`);

    switch (input) {
      case "firstName": {
        setFirstName(e.target.value);
        return;
      }
      case "lastName": {
        setLastName(e.target.value);
        return;
      }
      case "email": {
        setEmail(e.target.value);
        return;
      }
      case "password": {
        setPassword(e.target.value);
        return;
      }
      case "confirmPassword": {
        setConfirmPassword(e.target.value);
        return;
      }
      case "imageUrl": {
        setImageUrl(e.target.value);
        console.log("new value of imageUrl:", confirmPassword);
        return;
      }
    }
  };

  const handleImageUrlChange = value => {
    console.log("Lets finally set the IMAGEURL:", value);

    setFirstName(value);
    console.log("let's check imageURL from SignupForm: ", firstName);
  };

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Registration
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
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
                  activeStep,
                  handleChange,
                  values,
                  handleImageUrlChange
                )}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
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
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
