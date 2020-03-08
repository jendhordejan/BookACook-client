import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

/*=============COMPONENTS===================== */
import NavBar from "./components/NavBar";
import Home from "./components/HomeContainer";
import UserForm from "./components/UserForm";
import SignUpForm from "./components/signup/SignupForm";
import UploadImage from "./components/UploadImage";
import Footer from "./components/Footer";
// import { Toolbar } from 'material-ui';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavBar />

        {/* <Route path="/" exact component={Home} /> */}
        {/* <Route path="/" exact component={UploadImage}/> */}
        {/* <Route path="/" exact component={UserForm} /> */}
        <Route path="/" exact component={SignUpForm} />
        <Footer />
      </Provider>
    );
  }
}
export default App;
