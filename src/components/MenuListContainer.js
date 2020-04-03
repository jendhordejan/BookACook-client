import React, { Component } from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { menuGetByUserId } from "../Menu/action";
import MenuCards from "./MenuCards";

class MenuListContainer extends Component {
  componentDidMount() {
    console.log("==========componentDidMount=============");
    this.props.dispatch(menuGetByUserId(this.props.userId));
  }

  render() {
    const userId = this.props;
    const classes = this.props.classes;

    return (
      <Grid container spacing={4}>
        {console.log(
          "MenuListContainer.this.props.menus: ",
          this.props.menus.menus
        )}
        {/* 
        {this.props.menus.menus &&
          this.props.menus.menus.map(menuItem => (
            // console.log("CHECK MAPPING OF MENU: ", menuItem)
            <MenuCards menus={menuItem} />
          ))} */}
        <MenuCards menus={this.props.menus.menus} />
      </Grid>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    menus: reduxState.menus
  };
}

export default connect(mapStateToProps)(MenuListContainer);
