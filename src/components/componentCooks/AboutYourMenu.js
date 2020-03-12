import React from "react";
import Avatar from "@material-ui/core/Avatar";

import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";

import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: "80vh"
  },

  image: {
    backgroundImage:
      "url(https://marketingplatform.vivial.net/sites/default/files/inline_images/Depositphotos_48602647_l-2015%20%281%29.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  fab: {
    margin: theme.spacing(20)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function MenuCreateForm(props) {
  const classes = useStyles();
  const { category, menuTitle, menuDescription } = props.stateValues;
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
              onChange={props.handleChange}
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
              onChange={props.handleChange}
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
              onChange={props.handleChange}
            />
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
