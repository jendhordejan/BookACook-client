import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";

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
    const { imageUrl, handleImageUrlChange } = this.props;
    return (
      <div>
        <GridList cellHeight={200} spacing={2}>
          <GridListTile>
            {/* <img
              src="https://www.istockphoto.com/nl/vector/kleurrijke-brown-cirkel-chef-logo-gm1056400912-282321319"
              alt="Jend Hordejan"
            /> */}
            <img src={imageUrl} alt="" />
            <GridListTileBar
              actionIcon={
                <IconButton aria-label={`import`}>
                  <input
                    type="file"
                    name="file"
                    placeholder="Choose an Image"
                    onChange={this.UploadImage(handleImageUrlChange)}
                  />
                </IconButton>
              }
            />
          </GridListTile>
          {/* <button onClick={this.UploadImage}>upload</button> */}
        </GridList>
      </div>
    );
  }
}

// export default function ProfileImage() {
//   //   const classes = useStyles();
// //   const [image, setImage] = useState("");
// //   const [loading, setLoading] = useState(false);

//   return (
//     <div>
//       <GridList cellHeight={200} spacing={2}>
//         <GridListTile>
//           <img
//             src={
//               image
//                 ? image
//                 : "https://media.istockphoto.com/vectors/colorful-brown-circle-chef-logo-vector-id1056400912"
//             }
//             alt="Jend Hordejan"
//           />
//           <GridListTileBar
//             actionIcon={
//               <IconButton aria-label={`import`}>
//                 <input
//                   type="file"
//                   name="file"
//                   placeholder="Upload an image"
//                   onChange={() => UploadImage}
//                 />
//               </IconButton>
//             }
//           />
//         </GridListTile>
//       </GridList>
//     </div>
//   );
// }
