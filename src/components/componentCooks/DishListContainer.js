import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import DishCard from "./DishCard";

export default function DishList(props) {
  const { dishes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container spacing={1}>
        {dishes.map(dish => (
          <DishCard key={dish.title} dish={dish} />
        ))}
      </Grid>
    </React.Fragment>
  );
}
