import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import classNames from "classnames";

import SignupForm from "./SignupForm";

// profilePage Style
import styles from "../../assets/views/profilePageStyle";

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
  },
  "& .MuiTextField-root": {
    margin: theme.spacing(1),
    width: 200
  },
  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: 700
  },
  title: {
    marginTop: theme.spacing(2)
  }
}));

export default function SignUpContainer() {
  const classes = useStyles();
  //for personal profile
  const useProfileStyle = makeStyles(styles);
  const classesProfile = useProfileStyle();

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <React.Fragment>
      <CssBaseline />
      <SignupForm
        classes={classes}
        classesProfile={classesProfile}
        imageClasses={imageClasses}
      />
    </React.Fragment>
  );
}
