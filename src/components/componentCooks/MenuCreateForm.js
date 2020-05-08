import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
//Material UI icons
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

//components
import AboutYourMenu from "./AboutYourMenu";
import AddDishComponent from "./AddDish";
import ReviewPublish from "./ReviewPublish";

//functions
import { ColorlibConnector, ColorlibStepIcon } from "./MenuCreateContainer";

//action functions
import { menuCreate } from "../../Menu/action";
import { dishCreate } from "../../Dish/action";

class MenuCreateForm extends Component {
  state = {
    activeStep: 0,

    //state for About Your Meal
    // category: "Italian",
    menuTitle: "Authentic Italian Title",
    menuDescription: "some sample Italian description",

    //state for Add Dish
    dishes: [
      {
        title: "Adobo",
        category: "Filipino",
        price: 7.0,
        description:
          "It’s the Filipino dish everybody knows — the mighty adobo. It is made by stewing meat (usually chicken, pork, or a combination of both) in soy sauce and vinegar, adding peppercorns and bay leaves for that special flavour. Bonus leftovers tip: pull the meat from the bone and fry ’til crispy for some tasty adobo flakes.",
        image:
          "https://img.theculturetrip.com/1024x/smart/wp-content/uploads/2017/12/33374361143_e5a03d3d1d_k.jpg"
      },
      {
        title: "Kare-Kare",
        category: "Filipino",
        price: 7.0,
        description:
          "This rich stew is made with peanut sauce and, customarily, oxtail, but other meatier cuts of beef can also be added in. Many Filipinos will consider kare-kare incomplete without a serving of bagoong (fermented seafood paste) on the side.",
        image:
          "https://img.theculturetrip.com/1024x/smart/wp-content/uploads/2017/12/3494113750_b25ce01e20_b.jpg"
      },
      {
        title: "Sisig",
        category: "Filipino",
        price: 7.0,
        description:
          "Served sizzling on a hot stone plate, sisig is a favorite pulutan (beer chow) among Filipinos. The meat is primarily chopped up parts of the pigs’ face — in the Philippines, no cut of the animal goes to waste. Some recipes use either mayonnaise or raw egg (to be mixed in while hot) to give it a creamier texture but the classic way is to incorporate pig’s brain into the dish.",
        image:
          "https://img.theculturetrip.com/1024x/smart/wp-content/uploads/2017/08/shutterstock_516831739-by-bonchan-1.jpg"
      }
    ]
  };

  render() {
    // console.log("MenuCreateForm userId: ", this.props.userId);

    function getSteps() {
      return ["About your Menu", "Add dish", "Review & Publish"];
    }

    const handleAddNewDish = dish => {
      this.setState({
        dishes: [...this.state.dishes, dish]
      });
    };

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
            <AddDishComponent
              stateValues={stateValues}
              handleChange={handleChange}
              classes={classesAddDish}
              handleAddNewDish={handleAddNewDish}
            />
          );

        default:
          return (
            <ReviewPublish stateValues={stateValues} classes={classesAYM} />
          );
      }
    }

    const steps = getSteps();

    const handleNext = () => {
      if (this.state.activeStep === steps.length - 1) {
        handleSubmit(this.state);
      }
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

      this.setState({
        [event.target.name]: event.target.value
      });
    };

    const handleSubmit = async state => {
      const { menuTitle, menuDescription } = state;

      const newMenu = {
        title: menuTitle,
        description: menuDescription,
        userId: this.props.userId
      };

      await this.props.menuCreate(newMenu);

      const { dishes } = state;

      dishes.map(async dishItem => {
        const menuId = this.props.newMenuId;
        const newDishItem = { ...dishItem, menuId };

        await this.props.dishCreate(newDishItem);
        this.props.history.push(`/dashboard/${this.props.userId}`);
      });
    };

    const { classes, classesAddDish, classesAYM, userId } = this.props;

    return (
      <div className={classes.root}>
        {console.log("check Redux props userId ", userId)}
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

function mapStateToProps(reduxState) {
  return {
    user: reduxState.user.user,
    newMenuId: reduxState.menus.newMenu.id
  };
}

export default withRouter(
  connect(mapStateToProps, { menuCreate, dishCreate })(MenuCreateForm)
);
