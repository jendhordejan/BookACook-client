import React, { Component } from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";

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
      <Grid container spacing={10}>
        {console.log(
          "MenuListContainer.this.props.menus: ",
          this.props.menus.menus
        )}
        <Grid item xs={12} sm={"auto"} md={12}>
          <MenuCards menus={this.props.menus.menus} classes={classes} />
        </Grid>
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
