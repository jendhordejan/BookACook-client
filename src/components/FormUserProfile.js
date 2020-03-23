import React, { Component } from 'react';
// import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import Avatar from '@material-ui/core/Avatar'
// import { makeStyles } from '@material-ui/core/styles';



export class FormUserProfile extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
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
            <AppBar title="Enter User Details" />
            {/* <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/jendhordejan/image/upload/v1583485443/dilkobjv0wp1em0bkhtd.jpg" className={classes.large} /> */}
            
            <TextField
              placeholder="Place your Image Url"
              label="Image URL"
              onChange={handleChange('imageUrl')}
              defaultValue={values.imageUrl}
              margin="normal"
              fullWidth="true"
            />
            <br/>
            <TextField
        type="file"
        name="file"
        placeholder="Upload an image"
        // onChange={uploadImage}
      />
            <Button
              color="primary"
              variant="containedPrimary"
              // onClick={this.back}
            >upload</Button>
            <br />
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
							fullWidth="true"
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
							fullWidth="true"
            />
            <br />

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

export default FormUserProfile;