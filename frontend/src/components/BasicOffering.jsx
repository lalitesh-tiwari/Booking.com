import React, { useState } from "react";

const BasicOffering = ({ checked, onChange }) => {
  const [selectedCheckbox, setselectedCheckbox] = useState([]);

  const handleCheckboxes = (e) => {
    const value = e.target.value;
    setselectedCheckbox((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const checkboxBorderClass = (value) =>
    selectedCheckbox.includes(value) ? "border-[#e81a61]" : "border-black/25";

  return (
    <>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${checkboxBorderClass(
          "Wi-fi"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="checkbox"
          value="Wi-fi"
          checked={selectedCheckbox.includes("Wi-fi")}
          onChange={handleCheckboxes}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-wifi-line text-[1.1vmax]"></i>
        <span>Wi-fi</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${checkboxBorderClass(
          "TV"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="checkbox"
          value="TV"
          checked={selectedCheckbox.includes("TV")}
          onChange={handleCheckboxes}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-tv-line text-[1.2vmax]"></i>
        <span>TV</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${checkboxBorderClass(
          "Kitchen"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="checkbox"
          value="Kitchen"
          checked={selectedCheckbox.includes("Kitchen")}
          onChange={handleCheckboxes}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-restaurant-2-line text-[1.1vmax]"></i>
        <span>Kitchen</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${checkboxBorderClass(
          "Washing Machine"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="checkbox"
          value="Washing Machine"
          checked={selectedCheckbox.includes("Washing Machine")}
          onChange={handleCheckboxes}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-shirt-line text-[1.1vmax]"></i>
        <span>Washing Machine</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${checkboxBorderClass(
          "Free Parking Spot"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="checkbox"
          value="Free Parking Spot"
          checked={selectedCheckbox.includes("Free Parking Spot")}
          onChange={handleCheckboxes}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-car-line text-[1.1vmax]"></i>
        <span>Free Parking Spot</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${checkboxBorderClass(
          "Air Conditioning"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="checkbox"
          value="Air Conditioning"
          checked={selectedCheckbox.includes("Air Conditioning")}
          onChange={handleCheckboxes}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-snowflake-line text-[1.1vmax]"></i>
        <span>Air Conditioning</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${checkboxBorderClass(
          "Workspace"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="checkbox"
          value="Workspace"
          checked={selectedCheckbox.includes("Workspace")}
          onChange={handleCheckboxes}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-macbook-line text-[1.1vmax]"></i>
        <span>Workspace</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${checkboxBorderClass(
          "Pets Allowed"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="checkbox"
          value="Pets Allowed"
          checked={selectedCheckbox.includes("Pets Allowed")}
          onChange={handleCheckboxes}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-baidu-line text-[1.1vmax]"></i>
        <span>Pets Allowed</span>
      </label>
    </>
  );
};

export default BasicOffering;
