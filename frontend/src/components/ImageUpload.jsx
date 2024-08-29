import React, { useState } from "react";
import axios from "axios";

const ImageUpload = ({propertyImages, onChange}) => {

  function uploadImage(e) {
    const files = e.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("images", files[i]);
    }
    axios
      .post("/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        const { data: filenames } = response;
        onChange((prev) => {
          return [...prev, ...filenames];
        });
      });
  }

  return (
    <div className="flex items-center gap-[1vmax] mb-[1vmax] mt-[0.5vmax] flex-wrap">
      {propertyImages.length > 0 &&
        propertyImages.map((link, index) => {
          const imageUrl = "http://localhost:4000/" + link;
          return (
            <div key={index}>
              <img
                src={imageUrl}
                alt={`Property ${index}`}
                className="w-[15vw] h-[20vh] object-cover rounded-lg"
              />
            </div>
          );
        })}
      <div className="border-[2px] border-[#b0b0b0] w-[15vw] h-[20vh] flex items-center justify-center mt-[0.3vmax] rounded-md ">
        <label className="text-[#e81a61] w-full h-full text-[1.5vmax] font-semibold flex items-center gap-2 cursor-pointer hover:bg-[#e81a61] hover:text-white duration-200">
          <input type="file" multiple hidden onChange={uploadImage} />
          <i className="ri-upload-2-line font-thin text-[1.3vmax] ml-[1vmax]"></i>
          Upload Images
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;
