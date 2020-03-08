import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class SignupDetails extends Component {
  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Signup details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              onChange={handleChange("email")}
              defaultValue={values.email}
              fullWidth
              // autoComplete="billing address-line1"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              onChange={handleChange("password")}
              defaultValue={values.password}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="confirmpassword"
              name="confirmpassword"
              label="Confirm Password"
              onChange={handleChange("confirmPassword")}
              defaultValue={values.confirmPassword}
              fullWidth
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
