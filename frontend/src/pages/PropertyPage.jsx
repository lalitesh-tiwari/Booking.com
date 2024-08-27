import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import BasicOffering from "../components/BasicOffering";
import SpecialOffering from "../components/SpecialOffering";
import SafetyOffering from "../components/SafetyOffering";
import PropertyTypeBtns from "../components/PropertyTypeBtns";

const PropertyPage = () => {
  const { action } = useParams();
  const [propertyType, setpropertyType] = useState("");
  const [propertyTitle, setpropertyTitle] = useState("");
  const [propertyAddress, setpropertyAddress] = useState("");
  const [propertyImages, setpropertyImages] = useState([]);
  const [uploadedImages, setuploadedImages] = useState([]);
  const [propertyDescription, setpropertyDescription] = useState("");
  const [propertyOfferings, setpropertyOfferings] = useState([]);
  const [checkIn, setcheckIn] = useState("12:00");
  const [checkOut, setcheckOut] = useState("12:00");
  const [maxGuest, setmaxGuest] = useState(1);

  function inputHeading(text) {
    return (
      <h1 className="text-[1.2vmax] font-semibold leading-[1.2vmax] ml-[0.3vmax]">
        {text}
      </h1>
    );
  }

  function inputInfo(text) {
    return (
      <p className="text-[0.85vmax] font-semibold text-black/55 ml-[0.3vmax]">
        {text}
      </p>
    );
  }

  function preInput(heading, info) {
    return (
      <>
        {inputHeading(heading)}
        {inputInfo(info)}
      </>
    );
  }

  return (
    <div className="h-[81vh] border-r border-l-[2px] border-black/25 p-[1vmax] overflow-auto">
      {action !== "addnew" && (
        <div>
          <Link
            to={"/myaccount/myproperties/addnew"}
            className="bg-[#E81A61] text-white px-[1vmax] py-[0.5vmax] rounded-md"
          >
            <i className="ri-menu-add-line font-thin mr-[0.2vmax]"></i>
            Add New Property
          </Link>
        </div>
      )}
      {action === "addnew" && (
        <form>
          <h1 className="text-[1.2vmax] font-semibold leading-[1.2vmax] ml-[0.3vmax]">
            Property Type
          </h1>
          <p className="text-[0.85vmax] font-semibold text-black/55 ml-[0.3vmax]">
            Which of these best describe your place?
          </p>
          <div className="w-[65%] grid grid-cols-2 md:grid-cols-4 gap-[1vmax] mt-[0.3vmax] mb-[1vmax]">
            <PropertyTypeBtns />
          </div>
          <h1 className="text-[1.2vmax] font-semibold leading-[1.2vmax] ml-[0.3vmax]">
            Property Name/Title
          </h1>
          <p className="text-[0.85vmax] font-semibold text-black/55 ml-[0.3vmax]">
            Short titles work best. Have fun with it - you can always change it
            later.
          </p>
          <input
            type="text"
            value={propertyTitle}
            onChange={(e) => setpropertyTitle(e.target.value)}
            placeholder="Property Title"
            className="border-[2px] border-[#b0b0b0] pl-[1vmax] mt-[0.25vmax] mb-[1vmax] w-[57vw] h-[5vh] rounded-md outline-none"
          />

          <h1 className="text-[1.2vmax] font-semibold leading-[1.2vmax] ml-[0.3vmax]">
            Property Address
          </h1>
          <p className="text-[0.85vmax] font-semibold text-black/55 ml-[0.3vmax]">
            Your address is only shared with guests after they've made a
            reservation.
          </p>
          <input
            type="text"
            placeholder="Property Address"
            value={propertyAddress}
            onChange={(e) => setpropertyAddress(e.target.value)}
            className="border-[2px] border-[#b0b0b0] pl-[1vmax] my-[0.25vmax] w-[57vw] h-[5vh] rounded-md outline-none mb-[1vmax]"
          />
          <h1 className="text-[1.2vmax] font-semibold leading-[1.2vmax] ml-[0.3vmax]">
            Property Images
          </h1>
          <p className="text-[0.85vmax] font-semibold text-black/55 ml-[0.3vmax]">
            Showcase best side of your property. More=Better
          </p>
          <div className="border-[2px] border-[#b0b0b0] w-[20vw] h-[20vh] flex items-center justify-center mt-[0.3vmax] rounded-md mb-[1vmax]">
            <button className="text-[#e81a61] text-[1.1vmax] font-semibold flex items-center gap-1">
              <i className="ri-upload-2-line font-thin text-[1.3vmax]"></i>{" "}
              Upload Images
            </button>
          </div>
          <h1 className="text-[1.2vmax] font-semibold leading-[1.2vmax] ml-[0.3vmax]">
            Property Description
          </h1>
          <p className="text-[0.85vmax] font-semibold text-black/55 ml-[0.3vmax]">
            Share what makes your place special.
          </p>
          <textarea
            value={propertyDescription}
            onChange={(e) => setpropertyDescription(e.target.value)}
            className="border-[2px] border-[#b0b0b0] w-[57vw] h-[15vh] resize-none rounded-md mt-[0.3vmax] mb-[1vmax]"
          ></textarea>
          <h1 className="text-[1.2vmax] font-semibold leading-[1.2vmax] ml-[0.3vmax]">
            Property Offerings
          </h1>
          <p className="text-[0.85vmax] font-semibold text-black/55 ml-[0.3vmax]">
            You can edit offerings after you publish your listing.
          </p>
          <div className=" mt-[0.5vmax] w-[65%] ">
            <h1 className="font-semibold text-[1vmax] text-black/70 mt-[0.3vmax]">
              Basic Amenities:
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[1vmax] mt-[0.3vmax]">
              <BasicOffering
                checked={propertyOfferings}
                onChange={setpropertyOfferings}
              />
            </div>
          </div>
          <div className=" mt-[0.5vmax] w-[65%]">
            <h1 className="font-semibold text-[1vmax] text-black/70 mt-[0.3vmax]">
              Special Amenities:
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[1vmax] mt-[0.3vmax]">
              <SpecialOffering
                checked={propertyOfferings}
                onChange={setpropertyOfferings}
              />
            </div>
          </div>
          <div className=" mt-[0.5vmax] w-[65%] mb-[1vmax]">
            <h1 className="font-semibold text-[1vmax] text-black/70 mt-[0.3vmax]">
              Safety Drills:
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[1vmax] mt-[0.3vmax]">
              <SafetyOffering
                checked={propertyOfferings}
                onChange={setpropertyOfferings}
              />
            </div>
          </div>
          <h1 className="text-[1.2vmax] font-semibold leading-[1.2vmax] ml-[0.3vmax]">
            Check-In & Check-Out
          </h1>
          <p className="text-[0.85vmax] font-semibold text-black/55 ml-[0.3vmax]">
            Set Some Boundaries, can be changed later.
          </p>
          <div className="mt-[0.5vmax] flex items-center gap-[2vmax]">
            <label>
              <span className="font-semibold text-[1.1vmax]">
                Check-In Time:
              </span>
              <input
                type="time"
                value={checkIn}
                onChange={(e) => setcheckIn(e.target.value)}
                className="border border-black/25 bg-[#fafafa] px-[0.5vmax] rounded-[0.3vmax] outline-none ml-[0.5vmax]"
              />
            </label>
            <label>
              <span className="font-semibold text-[1.1vmax]">
                Check-Out Time:
              </span>
              <input
                type="time"
                value={checkOut}
                onChange={(e) => setcheckOut(e.target.value)}
                className="border border-black/25 bg-[#fafafa] px-[0.5vmax] rounded-[0.3vmax] outline-none ml-[0.5vmax]"
              />
            </label>
            <label>
              <span className="font-semibold text-[1.1vmax]">Max Guests:</span>
              <input
                type="number"
                value={maxGuest}
                onChange={(e) => setmaxGuest(e.target.value)}
                className="border border-black/25 h-[4vh] rounded-md ml-[0.3vmax] outline-none pl-[0.5vmax]"
              />
            </label>
          </div>
          <button className="bg-[#e81a61] text-white w-[50vw] h-[6vh] my-[1vmax] mt-[2vmax] ml-[2vmax] rounded-lg">
            <i className="ri-add-large-line mr-[0.5vmax]"></i>
            Save Property
          </button>
        </form>
      )}
    </div>
  );
};

export default PropertyPage;
