import React from "react";

const PropertyTypeBtns = ({ selected, onChange }) => {
  const propertyTypes = [
    { name: "House", icon: "ri-home-heart-line" },
    { name: "Flat/Apartment", icon: "ri-community-line" },
    { name: "Farmhouse", icon: "ri-ancient-gate-line" },
    { name: "Bunglow", icon: "ri-bank-line" },
    { name: "Villa", icon: "ri-government-line" },
    { name: "Hotel", icon: "ri-hotel-line" },
    { name: "Guest House", icon: "ri-building-line" },
    { name: "Houseboat", icon: "ri-sailboat-line" },
    { name: "Yacht", icon: "ri-ship-2-line" },
    { name: "TreeHouse", icon: "ri-tree-line" },
  ];

  const handleRadioChange = (e) => {
    onChange(e.target.value);
  };

  const radioBorderClass = (value) =>
    selected === value ? "border-[#e81a61]" : "border-black/25";

  return (
    <>
      {propertyTypes.map((property) => (
        <label
          key={property.name}
          className={`flex items-center gap-1 cursor-pointer border-[2px] ${radioBorderClass(
            property.name
          )} rounded-md p-[1vmax]`}
        >
          <input
            type="radio"
            name="propertyType"
            value={property.name}
            checked={selected === property.name}
            onChange={handleRadioChange}
            className="cursor-pointer h-[1vmax]"
          />
          <i className={`${property.icon} text-[1.1vmax]`}></i>
          <span>{property.name}</span>
        </label>
      ))}
    </>
  );
};

export default PropertyTypeBtns;
