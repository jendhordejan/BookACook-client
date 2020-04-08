import React, { Component } from "react";
import { connect } from "react-redux";
import { dishGetAll } from "../Dish/action";
import DisListHome from "./DishListHome";
import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";

class DishListHomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(dishGetAll());
  }

  render() {
    return (
      <Container className={this.props.classes.cardGrid} maxWidth="md">
        <DisListHome dishes={this.props.dishes} classes={this.props.classes} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    dishes: state.dishes
  };
};

export default connect(mapStateToProps)(DishListHomeContainer);
