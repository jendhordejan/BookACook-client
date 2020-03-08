import React, { useState } from "react";

export default function UploadImage() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "bxdlyryr");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/jendhordejan/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);
  };
  return <img src={image} style={{ width: "300px" }} alt="" />;
}

// (
//         <div>
// <h1>Upload Image</h1>
// <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/jendhordejan/image/upload/v1583485443/dilkobjv0wp1em0bkhtd.jpg"  />
// <input
//   type="file"
//   name="file"
//   placeholder="Upload an image"
//   onChange={uploadImage}
// />
//   {loading ? (
//     <h3>Loading...</h3>
//   ) : (
//     <img src={image} style={{ width: '300px' }} alt=""/>

//   )}
//         </div>
// )
