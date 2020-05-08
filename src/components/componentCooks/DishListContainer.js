import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import DishCard from "./DishCard";

export default function DishListContainer(props) {
  const { dishes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container spacing={1}>
        {dishes &&
          dishes.map(dish => <DishCard key={dish.title} dish={dish} />)}
      </Grid>
    </React.Fragment>
  );
}
