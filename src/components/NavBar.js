import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

export default class NavBar extends Component {
    render() {
        return (
            <AppBar title="This is the navigation bar" />
        )
    }
}
