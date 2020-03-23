import React from "react";
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

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={SignUpContainer} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/dashboard/:userId" exact component={Dashboard} />
      {/* <Route path="/menulist/:userId" exact component={MenuListContainer} /> */}
      <Route path="/menucreate/:id" exact component={MenuCreate} />

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
