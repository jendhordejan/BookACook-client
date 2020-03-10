import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

/*=============COMPONENTS===================== */
import NavBar from "./components/NavBar";
import Home from "./components/HomeContainer";
import SignUpContainer from "./components/signup/SingupContainer";
import SignIn from "./components/SignInContainer";
import MenuCreate from "./components/componentCooks/MenuCreateContainer";

import Dashboard from "./components/Dashboard";

import Footer from "./components/Footer";
// import { Toolbar } from 'material-ui';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path="/home" exact component={Home} />
      <Route path="/signup" exact component={SignUpContainer} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/menucreate" exact component={MenuCreate} />
      <Footer />
    </div>
  );
}

export default App;
