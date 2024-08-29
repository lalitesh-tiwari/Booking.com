import React, { useState } from "react";
import axios from "axios";
import PropertyTypeBtns from "../components/PropertyTypeBtns";
import ImageUpload from "../components/ImageUpload";
import BasicOffering from "../components/BasicOffering";
import SpecialOffering from "../components/SpecialOffering";
import SafetyOffering from "../components/SafetyOffering";
import AccountNav from "../components/AccountNav";
import { Navigate, useParams } from "react-router-dom";

const PropertyForm = () => {
  const { id } = useParams();
  const [propertyType, setpropertyType] = useState("");
  const [propertyTitle, setpropertyTitle] = useState("");
  const [propertyAddress, setpropertyAddress] = useState("");
  const [propertyImages, setpropertyImages] = useState([]);
  const [propertyDescription, setpropertyDescription] = useState("");
  const [propertyOfferings, setpropertyOfferings] = useState([]);
  const [checkIn, setcheckIn] = useState("12:00");
  const [checkOut, setcheckOut] = useState("12:00");
  const [maxGuest, setmaxGuest] = useState(1);
  const [redirect, setredirect] = useState(false);

  async function addNewProperty(e) {
    e.preventDefault();
    const propertyData = {
      propertyType,
      propertyTitle,
      propertyAddress,
      propertyImages,
      propertyDescription,
      propertyOfferings,
      checkIn,
      checkOut,
      maxGuest,
    };
    await axios.post("/addproperty", propertyData);
    setredirect(true);
  }

  if (redirect) {
    return <Navigate to={"/myaccount/myproperties"} />;
  }

  return (
    <div>
      <AccountNav />
      <form onSubmit={addNewProperty}>
        <h1 className="text-[1.2vmax] font-semibold leading-[1.2vmax] ml-[0.3vmax]">
          Property Type
        </h1>
        <p className="text-[0.85vmax] font-semibold text-black/55 ml-[0.3vmax]">
          Which of these best describe your place?
        </p>
        <div className="w-[65%] grid grid-cols-2 md:grid-cols-4 gap-[1vmax] mt-[0.3vmax] mb-[1vmax]">
          <PropertyTypeBtns
            selected={propertyType}
            onChange={setpropertyType}
          />
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
          Showcase best side of your property. More=Better.
        </p>
        <ImageUpload
          propertyImages={propertyImages}
          onChange={setpropertyImages}
        />
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
              selected={propertyOfferings}
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
              selected={propertyOfferings}
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
              selected={propertyOfferings}
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
            <span className="font-semibold text-[1.1vmax]">Check-In Time:</span>
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
        <button
          type="submit"
          className="bg-[#e81a61] text-white w-[50vw] h-[6vh] my-[1vmax] mt-[2vmax] ml-[2vmax] rounded-lg"
        >
          <i className="ri-add-large-line mr-[0.5vmax]"></i>
          Save Property
        </button>
      </form>
    </div>
  );
};

export default PropertyForm;
