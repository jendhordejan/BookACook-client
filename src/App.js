import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

/*=============COMPONENTS===================== */
import NavBar from "./components/NavBar";
import Home from "./components/HomeContainer";
import SignUpContainer from "./components/signup/SingupContainer";
import SignIn from "./components/SignInContainer";
import MenuCreate from "./components/componentCooks/MenuCreateContainer";
// import MenuListContainer from "./components/MenuListContainer";

import Dashboard from "./components/Dashboard";

import Footer from "./components/Footer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function App() {
  // const protectedRoute = (Component, routerProps) => {
  //   const user = this.props.user;
  //   console.log("protected Route", user);
  //   return user && user.token ? (
  //     <Component {...routerProps} />
  //   ) : (
  //     <Redirect to="/signin" />
  //   );
  // };

  return (
    <div className="App">
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={SignUpContainer} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/dashboard/:userId" exact component={Dashboard} />
      {/* <Route path="/menulist/:userId" exact component={MenuListContainer} /> */}
      <Route path="/menucreate" exact component={MenuCreate} />
      {/* <Route
        exact
        path="/menucreate"
        render={routerProps => protectedRoute(MenuCreate, routerProps)}
      /> */}
      <Footer />
    </div>
  );
}

function mapStateToProps(reduxState) {
  return {
    user: reduxState.user.user
  };
}

//const mapDispatchToProps = {};

export default connect(mapStateToProps)(App);
