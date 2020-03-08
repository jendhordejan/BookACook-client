import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import ProfileImage from "./ProfileImage";

import React, { Component } from "react";

export default class AddressForm extends Component {
  render() {
    const { values, handleChange, handleImageUrlChange } = this.props;
    console.log("RENDERING", values.imageUrl);

    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Personal details
        </Typography>
        <Grid container spacing={12} justify={"center"}>
          <ProfileImage
            imageUrl={values.imageUrl}
            handleImageUrlChange={handleImageUrlChange}
          />
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="imageUrl"
              name="imageUrl"
              label="imageUrl"
              fullWidth
              // defaultValue={values.imageUrl}
              onChange={handleChange("imageUrl")}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="billing address-line2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="billing address-level2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="billing postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="billing country"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
