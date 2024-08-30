import React from "react";

const BasicOffering = ({ selected, onChange }) => {
  const offerings = [
    { name: "Wi-fi", icon: "ri-wifi-line" },
    { name: "TV", icon: "ri-tv-line" },
    { name: "Kitchen", icon: "ri-restaurant-2-line" },
    { name: "Washing Machine", icon: "ri-shirt-line" },
    { name: "Free Parking Spot", icon: "ri-car-line" },
    { name: "Air Conditioning", icon: "ri-snowflake-line" },
    { name: "Workspace", icon: "ri-macbook-line" },
    { name: "Pets Allowed", icon: "ri-baidu-line" },
  ];

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange(selected.filter((item) => item !== name));
    }
  };

  return offerings.map((offering) => (
    <label
      key={offering.name}
      className={`flex items-center gap-1 cursor-pointer border-[2px] ${
        selected.includes(offering.name)
          ? "border-[#e81a61]"
          : "border-black/25"
      } rounded-md p-[1vmax]`}
    >
      <input
        type="checkbox"
        name={offering.name}
        checked={selected.includes(offering.name)}
        onChange={handleCheckboxChange}
        className="cursor-pointer h-[1vmax]"
      />
      <i className={`${offering.icon} text-[1.1vmax]`}></i>
      <span>{offering.name}</span>
    </label>
  ));
};

export default BasicOffering;
