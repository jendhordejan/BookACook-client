import React, { Component } from "react";

//Material UI
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

//Component
import DishCard from "./DishCard";

export default class ReviewPublish extends Component {
  render() {
    const { classes } = this.props;
    const { menuTitle, menuDescription, dishes } = this.props.stateValues;
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={6}
          md={12}
          component={Paper}
          elevation={6}
          square
        >
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              {menuTitle}
            </Typography>
            <Typography component="subtitle" variant="h6">
              {menuDescription}
            </Typography>
          </div>

          <Grid container spacing={1}>
            {dishes.map(dish => (
              <DishCard key={dish.title} dish={dish} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
