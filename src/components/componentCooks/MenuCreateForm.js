import React, { Component } from "react";
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
import AboutYourMenu from "./AboutYourMenu";
import AddDish from "./AddDish";

import { ColorlibConnector, ColorlibStepIcon } from "./MenuCreateContainer";

export default class MenuCreateForm extends Component {
  state = {
    activeStep: 0,

    //state for About Your Meal
    category: "Italian",
    menuTitle: "Authentic Italian Title",
    menuDescription: "some sample Italian description",

    //state for Add Dish
    dishes: [
      {
        title: "Tom Yum Goong (Spicy Shrimp Soup)",
        price: 7.0,
        description:
          "The unique flavor of this soup – rightfully famous all over the world – is achieved by the combination of fragrant lemongrass, kaffir lime leaves, shallots, lime juice, fish sauce, fresh chilies (or chili paste), and fat juicy prawns. Its fresh and rich exotic flavor instinctively sets your definition of the flavor of Thailand!",
        image:
          "https://data.asiahighlights.com/image/travel-guide/thailand/thai-food/tom-yum-goong.webp",
        imageText: "Image Text"
      },
      {
        title: "Pad Thai (Thai-Style Fried Noodles)",
        price: 7.0,
        description:
          "A signature dish in Thailand, pad Thai is supposed be on the menu of every restaurant in Thailand, from noisy street stalls to Michelin-starred restaurants in Bangkok. It comprises rice noodles (thin or wide) stir-fried with extravagant amounts of fresh prawns, crunchy bean sprouts, eggs, tasty tofu cubes, onion, and finely grated peanuts. A squirt of lime juice will complete the dish before it thrills every taste bud in your mouth.",
        image:
          "https://data.asiahighlights.com/image/travel-guide/thailand/thai-food/pad-thai.webp",
        imageText: "Image Text"
      }
    ]
  };

  render() {
    function getSteps() {
      return ["About your Menu", "Add dish", "Review & Publish"];
    }

    function getStepContent(
      step,
      stateValues,
      handleChange,
      classesAYM,
      classesAddDish
    ) {
      //this is where you call each component to handle each step
      switch (step) {
        case 0:
          return (
            <AboutYourMenu
              stateValues={stateValues}
              classesAddDish={classesAddDish}
              classes={classesAYM}
              handleChange={handleChange}
            />
          );
        case 1:
          return (
            <AddDish
              stateValues={stateValues}
              handleChange={handleChange}
              classes={classesAddDish}
            />
          );

        default:
          return "Review and publish your menu";
      }
    }

    const steps = getSteps();

    const handleNext = () => {
      this.setState({ activeStep: this.state.activeStep + 1 });
    };

    const handleBack = () => {
      this.setState({ activeStep: this.state.activeStep - 1 });
    };

    const handleReset = () => {
      this.setState({ activeStep: 0 });
    };

    const handleChange = event => {
      const { value } = event.target;
      console.log("value in handleChange:", value);
      console.log(event);
      this.setState({
        [event.target.name]: event.target.value
      });
      console.log("state is", this.state);
    };

    const { classes, classesAddDish, classesAYM } = this.props;

    return (
      <div className={classes.root}>
        {console.log("MenuCreateContainer.checkState Values: ", this.state)}
        <Stepper
          alternativeLabel
          activeStep={this.state.activeStep}
          connector={<ColorlibConnector />}
        >
          {steps.map(label => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                You have successfully created a menu - would you like to create
                a new menu?
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Let's create another menu
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(
                  this.state.activeStep,
                  this.state,
                  handleChange,
                  classesAYM,
                  classesAddDish
                )}
              </Typography>
              <div>
                <Button
                  disabled={this.state.activeStep === 0}
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
                  {this.state.activeStep === steps.length - 1
                    ? "Publish"
                    : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
