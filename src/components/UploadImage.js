//function for uploading image to Cloudinary
//
//return the URL given by Cloudinary as an output.

const uploadImage = async file => {
  console.log("Let's upload an image.. file: ", file);

  const data = new FormData();

  data.append("file", file[0]);

  //upload_preset vallue as provided by Cloudinary upon setup
  data.append("upload_preset", "bxdlyryr");

  const response = await fetch(
    "https://api.cloudinary.com/v1_1/jendhordejan/image/upload",
    {
      method: "POST",
      body: data
    }
  );

  const uploadedFile = await response.json();
  console.log("uploaded file: ", uploadedFile);
  return uploadedFile.secure_url;
};

export default uploadImage;
