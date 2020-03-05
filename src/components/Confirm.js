import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, password, imageUrl, houseNo, postCode, about }
    } = this.props;
    return (
      <MuiThemeProvider >
        {/* <React.Fragment> */}
          <div
            open="true"
            fullWidth="true"
            maxWidth='sm'
          >
          <AppBar title="Confirm User Data" />
          <List>
          <ListItem>
              <ListItemText primary="Image Url" secondary={imageUrl} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="First Name" secondary={firstName} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={lastName} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={email} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Password" secondary={password} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="House No" secondary={houseNo} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Post Code" secondary={postCode} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="About" secondary={about} /> 
            </ListItem>
          </List>
          <br />
        
          <Button
            color="secondary"
            variant="contained"
            onClick={this.back}
          >Back</Button>

          <Button
            color="primary"
            variant="contained"
            onClick={this.continue}
          >Confirm & Continue</Button>
          </div>
        {/* </React.Fragment> */}
      </MuiThemeProvider>
    );
  }
}

export default Confirm;