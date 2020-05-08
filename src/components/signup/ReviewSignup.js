import React, { Component } from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";

export default class ReviewSignup extends Component {
  render() {
    const { classes, values, classesProfile, imageClasses } = this.props;
    const Address = `${values.address.street} ${values.houseNo} ,
    ${values.address.postcode} ${values.address.city}, The Netherlands`;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Review Your Registration
        </Typography>
        <div className={classesProfile.container}>
          <GridContainer justify={"center"}>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classesProfile.viewProfile}>
                <div>
                  <img
                    src={values.imageUrl}
                    alt="..."
                    className={imageClasses}
                  />
                </div>
                <div className={classesProfile.name}>
                  <br />
                  <h2 className={classesProfile.title}>
                    {values.firstName} {values.lastName}
                  </h2>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <Grid container spacing={3}>
          {/* SignIn Details */}
          <Typography variant="body1">SignIn Details</Typography>
          <Grid item xs={12} sm={12} md={6}>
            <Grid item xs={12} sm={12}>
              <Typography variant="body1">Email : {values.email}</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant="body1">
                Password : {values.password}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={5}>
          {/* Address */}
          <Typography variant="body1">Personal Details</Typography>
          <br />
          <br />
          <Grid item xs={12} sm={12}>
            <Grid item xs={12} sm={12}>
              <Typography variant="body1">Address : {Address}</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant="body1">About Me: {values.about}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
