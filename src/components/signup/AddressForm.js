import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import ProfileImage from "./ProfileImage";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import UploadImage from "../UploadImage";

export default class AddressForm extends Component {
  state = {
    imageUrl: "https://source.unsplash.com/random"
  };
  render() {
    const {
      values,
      handleChange,
      handleImageUrlChange,
      handleVerifyAddress,
      classesProfile,
      imageClasses
    } = this.props;

    const handleUploadImage = async e => {
      const uploadedImageUrl = await UploadImage(e.target.files);
      console.log("uploadedImageUrl: ", uploadedImageUrl);

      handleImageUrlChange(uploadedImageUrl);
    };

    return (
      <React.Fragment>
        <div>
          <Typography variant="h6" gutterBottom>
            Personal details
          </Typography>
        </div>
        {/* <Grid container spacing={3} justify={"center"}> */}
        {/* <ProfileImage
          imageUrl={values.imageUrl}
          handleImageUrlChange={handleImageUrlChange}
          classesProfile={classesProfile}
          imageClasses={imageClasses}
          fullWidth="true"
        /> */}
        {/* </Grid> */}
        {/* Test for Image */}
        <CardActionArea
          component="a"
          href="#"
          className={classesProfile.container}
        >
          <Card
            className="card"
            style={{
              height: "50%",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <CardMedia
              className={classesProfile.viewProfile}
              style={{
                paddingTop: "56.25%" // 16:9
              }}
              image={values.imageUrl}
            />
          </Card>
        </CardActionArea>
        <CardContent
          className="cardContent"
          style={{
            flexGrow: 1
          }}
        >
          <CardActions>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="menuTitle"
              type="file"
              id="file"
              onChange={handleUploadImage}
            />
          </CardActions>
        </CardContent>
        {/* end of Test for Image */}
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
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="houseNo"
              name="houseNo"
              label="House No"
              fullWidth
              onChange={handleChange("houseNo")}
              disabled={values.verifiedAddress ? true : false}
              defaultValue={values.houseNo}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="postCode"
              name="postCode"
              label="Zip / Postal code"
              fullWidth
              onChange={handleChange("postCode")}
              disabled={values.verifiedAddress ? true : false}
              defaultValue={values.postCode}
            />
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={handleVerifyAddress}
          >
            {values.verifiedAddress ? "VERIFIED" : "Verify Address"}
          </Button>
          <Grid item xs={12}>
            <TextField
              id="outlined-multiline-static"
              label="About Me"
              placeholder="Tell something about yourself"
              multiline
              rows="4"
              onChange={handleChange("about")}
              defaultValue={values.about}
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
