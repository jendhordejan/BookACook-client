import React, { Component } from "react";

import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";

import DishListContainer from "./DishListContainer";

export default class AddDish extends Component {
  state = {
    name: "dish name",
    category: "Thai",
    description: "dish local description",
    price: 0,
    imageUrl: "https://source.unsplash.com/random"
  };

  render() {
    const { dishes } = this.props.stateValues;
    const { classes, handleAddNewDish } = this.props;

    const handleChange = event => {
      //   const { value } = event.target;
      console.log(
        `value in handleChange... eventname: ${event.target.name} | value:  ${event.target.value}`
      );
      //   console.log(event);
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        {console.log("state is", this.state)}
        <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
          {/*  Card Section  */}
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <RestaurantMenuIcon />
            </Avatar>

            <Typography component="h1" variant="h6">
              Let's add some dishes to your menu
            </Typography>

            <CardActionArea component="a" href="#">
              <Card
                className="card"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <CardMedia
                  className="cardMedia"
                  style={{
                    paddingTop: "56.25%" // 16:9
                  }}
                  image={this.state.imageUrl}
                />
              </Card>
            </CardActionArea>
            <CardContent
              className="cardContent"
              style={{
                flexGrow: 1
              }}
            >
              <CardActions>
                <Button size="small" color="primary">
                  import
                </Button>
              </CardActions>

              <FormControl className={classes.formControl} fullWidth>
                {/* Category */}
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="category"
                  required
                  value={this.state.category}
                  onChange={handleChange}
                >
                  <MenuItem value={"Asian"}>Asian</MenuItem>
                  <MenuItem value={"French"}>French</MenuItem>
                  <MenuItem value={"Italian"}>Italian</MenuItem>
                </Select>
                {/* Dish Name */}
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="name"
                  label="Dish Name"
                  type="name"
                  id="name"
                  value={this.state.name}
                  onChange={handleChange}
                />
                <Typography component="h1" variant="h6">
                  Name your dish and make us crave for it.
                </Typography>
                {/* Dish Description */}
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  multiline
                  rows="4"
                  name="description"
                  label="description"
                  type="description"
                  id="description"
                  value={this.state.description}
                  onChange={handleChange}
                />
                {/* Price */}
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="price"
                  label="Price"
                  type="price"
                  id="price"
                  value={this.state.price}
                  onChange={handleChange}
                />
              </FormControl>
            </CardContent>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                //this is just for testing
                const dish = {
                  title: this.state.name,
                  category: this.state.category,
                  price: this.state.price,
                  description: this.state.description,
                  image: this.state.imageUrl
                };
                handleAddNewDish(dish);
              }}
              className={classes.button}
            >
              Add
            </Button>
          </div>
        </Grid>
        <Grid
          item
          xs={false}
          sm={7}
          md={7}
          component={Paper}
          elevation={6}
          square
        >
          <Grid item xs={12} md={12}>
            {/*  Grid for displaying added dishes */}
            <DishListContainer dishes={dishes} classes={classes} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
