import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [viewAllImages, setviewAllImages] = useState(false);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/property/${id}`).then((response) => {
      setProperty(response.data);
    });
  }, [id]);

  if (!property) return;

  if (viewAllImages) {
    return (
      <div className="h-[90vh] overflow-y-auto">
        <button
          onClick={() => setviewAllImages(false)}
          className="fixed top-[14.5%] left-[0.5%] rounded bg-[#e81a61] text-white text-[1.1vmax] flex gap-1 items-center justify-center w-[8vw] h-[5.5vh]"
        >
          <i className="ri-arrow-left-line text-[1.3vmax] "></i>
          Go Back
        </button>
        <div className="w-[99.9%] min-h-screen flex flex-wrap items-center justify-center gap-[1vmax] py-[2vmax]">
          {property.propertyImages?.length > 0 &&
            property.propertyImages.map((image) => (
              <img
                src={"http://localhost:4000/" + image}
                className="w-[35vw] rounded-md"
              />
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative border-t border-black/20 w-full min-h-[90vh] pt-[1vmax] px-[7.5vw]">
      <i
        onClick={goBack}
        className="ri-arrow-left-line absolute left-[2%] top-[1%] font-thin text-[2.2vmax] text-[#e81a61] cursor-pointer"
      ></i>
      <h1 className="text-[2vmax] font-semibold leading-[2.2vmax]">
        {property.propertyTitle}
      </h1>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://maps.google.com?q=${encodeURIComponent(
          property.propertyAddress
        )}`}
        className="text-[0.9vmax] text-[#e81a62] font-semibold underline "
      >
        <i className="ri-map-pin-fill text-[1.1vmax]"></i>
        {property.propertyAddress}
      </a>
      <div className="relative">
        <div className="mt-[1vmax] w-full h-[60vh] flex justify-between">
          <div className="h-full w-[49.75%]">
            {property.propertyImages?.[0] && (
              <img
                className="w-full h-full object-cover rounded-md"
                src={"http://localhost:4000/" + property.propertyImages[0]}
              />
            )}
          </div>
          <div className="h-full w-[49.75%] flex flex-wrap justify-between">
            <div className="w-[49.5%] h-[49%]">
              {property.propertyImages?.[0] && (
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={"http://localhost:4000/" + property.propertyImages[1]}
                />
              )}
            </div>
            <div className="w-[49.5%] h-[49%]">
              {property.propertyImages?.[0] && (
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={"http://localhost:4000/" + property.propertyImages[2]}
                />
              )}
            </div>
            <div className="w-[49.5%] h-[49%]">
              {property.propertyImages?.[0] && (
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={"http://localhost:4000/" + property.propertyImages[3]}
                />
              )}
            </div>
            <div className="w-[49.5%] h-[49%]">
              {property.propertyImages?.[0] && (
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={"http://localhost:4000/" + property.propertyImages[4]}
                />
              )}
            </div>
          </div>
        </div>
        <button
          onClick={() => setviewAllImages(true)}
          className="absolute bottom-[2.5%] border border-[#e81a61] right-[0.5%] px-[1vmax] py-[0.25vmax] bg-[#e81a61] text-white flex items-center gap-[0.5vmax] text-[1vmax] rounded-md hover:bg-[white] hover:text-[#e81a61] duration-200"
        >
          <i className="ri-image-fill text-[1.1vmax]"></i>Show All Photos
        </button>
      </div>
      <div className="w-full mt-[0.5vmax] flex justify-between">
        <div>
          <h1 className="text-[1.5vmax] font-semibold">
            {property.propertyType} in {property.propertyAddress}
          </h1>
          <div className="flex gap-[1.25vmax]">
            <p className="text-[1.1vmax]">▪️ {property.maxGuest} Guests</p>
            <p className="text-[1.1vmax]">▪️ {property.bedrooms} Bedroom</p>
            <p className="text-[1.1vmax]">▪️ {property.bathrooms} Bathroom</p>
          </div>
        </div>
        <h1 className="text-[1.5vmax] font-semibold">
          Hosted By -{" "}
          <i className="ri-account-circle-fill text-[#e81a61] font-thin"></i>{" "}
          {property.owner.fullname}
        </h1>
      </div>
      <div className=" w-full min-h-[45vh] my-[2vmax] flex">
        <div className="w-[60%] h-full  border-t border-black/25 flex flex-col items-start justify-start gap-[1vmax] ">
          <h1 className="font-semibold text-[1.5vmax] tracking-wider mt-[1vmax]">
            About This Place
          </h1>
          <p className="text-[1vmax]">{property.propertyDescription}</p>
        </div>
        <div className="w-[45%] min-h-[45vh] flex  items-center justify-end">
          <div className="pin-this-div w-[80%] h-full border border-[#e81a61] bg-white rounded-md ">
            <div className=" w-full h-[8vh] flex items-end justify-center">
              <h1 className="text-[2.2vmax] w-[60%] flex items-baseline justify-center gap-1 font-semibold border-b border-black/25">
                ₹{property.price}
                <span className="text-[1.2vmax]">per Night</span>
              </h1>
            </div>
            <div className=" h-[30%] mt-[1.5vmax] flex">
              <div className="h-full w-[50%] flex items-center justify-center">
                <label
                  className="flex flex-col gap-[0.5vmax]  text-[1.1vmax] font-semibold"
                  htmlFor="checkin"
                >
                  Check In:
                  <input
                    type="date"
                    className="border border-[#e81a61] outline-[#e81a61] rounded p-1  font-normal"
                    defaultValue={new Date().toISOString().split("T")[0]}
                  />
                </label>
              </div>
              <div className="h-full w-[50%] border-l border-black/25 flex items-center justify-center">
                <label
                  className="flex flex-col gap-[0.5vmax] text-[1.1vmax] font-semibold"
                  htmlFor="checkin"
                >
                  Check In:
                  <input
                    type="date"
                    className="border border-[#e81a61]  outline-[#e81a61] rounded p-1 font-normal"
                    defaultValue={
                      new Date(Date.now() + 86400000)
                        .toISOString()
                        .split("T")[0]
                    }
                  />
                </label>
              </div>
            </div>
            <div className="w-full h-[8vh] mt-[0.5vmax] flex items-center justify-center">
              <label
                htmlFor=""
                className="flex items-center justify-center gap-3 text-[1.1vmax] font-semibold border-b border-black/25 h-full"
              >
                No. Of Guests:
                <input
                  type="number"
                  defaultValue={1}
                  className="border border-[#e81a61] outline-[#e81a61] p-1 rounded w-[20%] text-center font-normal [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </label>
            </div>
            <button className="bg-[#e81a61] text-white rounded mt-[1.5vmax] ml-[2vmax] w-[25vw] h-[5.5vh] hover:bg-white hover:text-[#e81a61] duration-200 hover:border hover:border-[#e81a61]">
              Book Property
            </button>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[40vh] mb-[2vmax] border border-black">
        <h1 className="text-[1.5vmax] font-semibold tracking-wider">
          What This Place Offers
        </h1>
        <div></div>
      </div>
    </div>
  );
};

export default PropertyDetail;
