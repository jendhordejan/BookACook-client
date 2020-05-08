import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";

import React, { Component } from "react";

export default class ProfileImage extends Component {
  state = {
    image: "",
    loading: false
  };

  UploadImage = actionImageChange => async e => {
    console.log("Let's upload an image");
    console.log("target file: ", e.target.files);
    console.log("Lets get started");

    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);

    data.append("upload_preset", "bxdlyryr");

    this.setState({ loading: true });
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/jendhordejan/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    console.log("this is the file: ", file);
    this.setState({ image: file.secure_url });
    this.setState({ loading: false });
    console.log("this is the image", this.state.image);
    actionImageChange(this.state.image);
  };

  render() {
    const {
      imageUrl,
      handleImageUrlChange,
      classesProfile,
      imageClasses
    } = this.props;
    return (
      <div className={classesProfile.container}>
        <GridContainer justify={"center"}>
          <GridItem xs={12} sm={12} md={6}>
            <div className={classesProfile.viewProfile}>
              <div>
                <img src={imageUrl} alt="..." className={imageClasses} />
              </div>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer justify={"center"}>
          <input
            type="file"
            name="file"
            placeholder="Choose an Image"
            onChange={this.UploadImage(handleImageUrlChange)}
          />
        </GridContainer>
      </div>
      // <Grid container spacing={12} justify={"center"}>
      //   <Grid item xs={5} sm={6}>
      //     <div className={classesProfile.profile}>
      //       <img src={imageUrl} alt="..." className={imageClasses} />

      //       <input
      //         type="file"
      //         name="file"
      //         placeholder="Choose an Image"
      //         onChange={this.UploadImage(handleImageUrlChange)}
      //       />
      //     </div>
      //   </Grid>
      //   {/* <Grid item xs={5} sm={6}>
      //       <input
      //         type="file"
      //         name="file"
      //         placeholder="Choose an Image"
      //         onChange={this.UploadImage(handleImageUrlChange)}
      //       />
      //   </Grid> */}
      // </Grid>
    );
  }
}

// <div>
//   <GridList cellHeight={200} spacing={2}>
//     <GridListTile>
//       <img src={imageUrl} alt="" />
//       <GridListTileBar
//         actionIcon={
//           <IconButton aria-label={`import`}>
//             <input
//               type="file"
//               name="file"
//               placeholder="Choose an Image"
//               onChange={this.UploadImage(handleImageUrlChange)}
//             />
//           </IconButton>
//         }
//       />
//     </GridListTile>
//   </GridList>
// </div>
