import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider >
        {/* <React.Fragment> */}
        <div 
            open="true"
            fullWidth="true"
            maxWidth='sm'
          >
            <AppBar title="Enter Personal Details" />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
							fullWidth="true"
            />
            <br />
            <TextField
              placeholder="Enter Your Password"
              label="Password"
              onChange={handleChange('password')}
              defaultValue={values.email}
              margin="normal"
							fullWidth="true"
            />
            <br />

            <TextField
              placeholder="Enter Your House No"
              label="House No"
              onChange={handleChange('houseNo')}
              defaultValue={values.HouseNo}
              margin="normal"
							fullWidth="true"
            />
            <br />
            <TextField
              placeholder="Enter Your Postal Code"
              label="Postal No"
              onChange={handleChange('postCode')}
              defaultValue={values.postCode}
              margin="normal"
							fullWidth="true"
            />
            <br />
            <TextField
              placeholder="Say a little somethinb about yourself"
              label="About"
              onChange={handleChange('about')}
              defaultValue={values.about}
              margin="normal"
							fullWidth="true"
            />
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
            >Continue</Button>
          </div>
        {/* </React.Fragment> */}
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;