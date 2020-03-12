import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";

import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";

import Select from "@material-ui/core/Select";

export default class AboutYourMenu extends Component {
  // state = {
  //   category: "Asian",
  //   menuTitle: "Authentic Menu Title",
  //   menuDescription: "sample description"
  // };

  render() {
    const { classes, classesAddDish, classesAYM } = this.props;

    const { category, menuTitle, menuDescription } = this.props.stateValues;
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <RestaurantMenuIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Tell us something about your menu.
            </Typography>

            <form className={classes.form} noValidate>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="category"
                required
                value={category}
                onChange={this.props.handleChange}
              >
                <MenuItem value={"Asian"}>Asian</MenuItem>
                <MenuItem value={"French"}>French</MenuItem>
                <MenuItem value={"Italian"}>Italian</MenuItem>
              </Select>
              <Typography component="h1" variant="h6">
                Give a title to your menu.
              </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="menuTitle"
                label="title"
                type="menuTitle"
                id="menuTitle"
                value={menuTitle}
                onChange={this.props.handleChange}
              />
              <Typography component="h1" variant="h6">
                Describe your menu and make us crave for it.
              </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                multiline
                rows="2"
                name="menuDescription"
                label="description"
                type="menuDescription"
                id="menuDescription"
                value={menuDescription}
                onChange={this.props.handleChange}
              />
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}
