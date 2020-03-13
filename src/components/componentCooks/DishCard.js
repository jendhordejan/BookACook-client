import React, { Component } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";

export default class DishCard extends Component {
  render() {
    const { dish } = this.props;
    return (
      <Grid item xs={12} md={12}>
        <CardActionArea component="a" href="#">
          <Card className="card" style={{ display: "flex" }}>
            <div className="cardDetails" style={{ flex: 1 }}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {dish.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  € {dish.price}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {dish.description}
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia
                className="cardMedia"
                image={dish.image}
                title={dish.imageTitle}
                style={{ width: 160 }}
              />
            </Hidden>
          </Card>
        </CardActionArea>
      </Grid>
    );
  }
}
