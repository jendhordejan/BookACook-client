import React, { Component } from 'react'
import { Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './components/Home'
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import UserForm  from './components/UserForm';
import { connect } from "react-redux";
import { Provider } from "react-redux";
import store from "./store";


class App extends Component {
  render() {
    return (
      // <MuiThemeProvider>

      // <BrowserRouter>
      
      <Provider store={store}>

        <NavBar/>
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={UserForm}/>
      </Provider>

      // </BrowserRouter>
      
      // </MuiThemeProvider>
    );
  }
}
export default App