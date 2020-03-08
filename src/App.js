import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

/*=============COMPONENTS===================== */
import NavBar from "./components/NavBar";
import Home from "./components/HomeContainer";
import SignUpContainer from "./components/signup/SingupContainer";

import Footer from "./components/Footer";
// import { Toolbar } from 'material-ui';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavBar />

        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/" exact component={SignUpContainer} />
        <Footer />
      </Provider>
    );
  }
}
export default App;
