import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
//icons
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import RateReviewIcon from "@material-ui/icons/RateReview";

import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

//components
import MenuCreateForm from "./MenuCreateForm";
import AboutYourMenu from "./AboutYourMenu";
import AddDish from "./AddDish";

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)"
  },
  active: {
    "& $line": {
      borderColor: "#784af4"
    }
  },
  completed: {
    "& $line": {
      borderColor: "#784af4"
    }
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1
  }
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center"
  },
  active: {
    color: "#784af4"
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor"
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18
  }
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
    }
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1
  }
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"
  }
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    // 1: <HourglassEmptyIcon />,
    1: <RestaurantMenuIcon />,
    2: <FastfoodIcon />,
    3: <RateReviewIcon />
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return ["About your Menu", "Add dish", "Review & Publish"];
}

function getStepContent(step, stateValues, handleChange) {
  //this is where you call each component to handle each step
  switch (step) {
    case 0:
      return (
        <AboutYourMenu stateValues={stateValues} handleChange={handleChange} />
      );
    case 1:
      return <AddDish stateValues={stateValues} handleChange={handleChange} />;

    default:
      return "Review and publish your menu";
  }
}

export default function MenuCreateContainer() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  // state for AboutYourMenu
  const [menuTitle, setMenuTitle] = React.useState("Authentic Menu");
  const [menuDescription, setMenuDescription] = React.useState(
    "Some Description"
  );
  // state for AddDish
  const [category, setCategory] = React.useState("Asian");
  const [dishes, setDishes] = React.useState([
    {
      title: "Tom Yum Goong (Spicy Shrimp Soup)",
      price: 7.0,
      description:
        "The unique flavor of this soup – rightfully famous all over the world – is achieved by the combination of fragrant lemongrass, kaffir lime leaves, shallots, lime juice, fish sauce, fresh chilies (or chili paste), and fat juicy prawns. Its fresh and rich exotic flavor instinctively sets your definition of the flavor of Thailand!",
      image:
        "https://data.asiahighlights.com/image/travel-guide/thailand/thai-food/tom-yum-goong.webp",
      imageText: "Image Text"
    }
  ]);

  const dish1 = {
    title: "Pad Thai (Thai-Style Fried Noodles)",
    price: 7.0,
    description:
      "A signature dish in Thailand, pad Thai is supposed be on the menu of every restaurant in Thailand, from noisy street stalls to Michelin-starred restaurants in Bangkok. It comprises rice noodles (thin or wide) stir-fried with extravagant amounts of fresh prawns, crunchy bean sprouts, eggs, tasty tofu cubes, onion, and finely grated peanuts. A squirt of lime juice will complete the dish before it thrills every taste bud in your mouth.",
    image:
      "https://data.asiahighlights.com/image/travel-guide/thailand/thai-food/pad-thai.webp",
    imageText: "Image Text"
  };

  const stateValues = {
    category,
    menuTitle,
    menuDescription,
    dishes
  };

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleChange = event => {
    switch (event.target.name) {
      case "category":
        setCategory(event.target.value);
        break;
      case "menuTitle":
        setMenuTitle(event.target.value);
        break;
      case "menuDescription":
        setMenuDescription(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className={classes.root}>
      {console.log("MenuCreateContainer.checkState Values: ", stateValues)}
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              You have successfully created a menu - would you like to create a
              new menu?
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Let's create another menu
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep, stateValues, handleChange)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Publish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
