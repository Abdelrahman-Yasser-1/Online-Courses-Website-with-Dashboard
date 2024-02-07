import React, { useEffect, useState } from "react";
import { CloseButton } from "reactstrap";
import uploadImageIcon from "../../assets/icons/upload-image-icon.svg";

const ImageUploader = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    props.onImageSelect(file);
  };

  const deleteImageHandler = () => {
    setSelectedImage(null);
    props.onImageSelect(null);
  };

  useEffect(()=>{
    if (!props.isAdd) setSelectedImage(props.img);
  },[])

  return (
    <div className="mb-3">
      {!selectedImage && (
        <div>
          <label
            className="custom-file-upload mb-3 rounded-3 p-3 d-flex flex-column justify-content-around align-items-center text-center  w-100 "
            htmlFor="file"
          >
            <img src={uploadImageIcon} height={80} alt="uploadImageIcon" />
            <span className="text-secondary">Click to upload course image</span>
            <input
              type="file"
              id="file"
              className="d-none"
              onChange={handleImageChange}
              required
              disabled={props.isLoading}
            />
          </label>
        </div>
      )}

      {selectedImage && (
        <div className="text-center position-relative">
          <img
            src={selectedImage}
            alt="Selected"
            className="course-image rounded-3"
          />
          <div className="bg-dark rounded-3 p-1 position-absolute top-0 end-0 opacity-75">
            <CloseButton
              onClick={deleteImageHandler}
              className=""
              variant="white"
              disabled={props.isLoading}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
