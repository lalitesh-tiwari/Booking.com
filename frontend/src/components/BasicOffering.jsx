import React, { useState } from "react";

const BasicOffering = ({ selected, onChange }) => {
  const [selectedCheckbox, setselectedCheckbox] = useState([]);

  function handleCheckboxes(e) {
    const { checked, name, value } = e.target;
    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange([...selected.filter((selectedName) => selectedName !== name)]);
    }
    //
    setselectedCheckbox((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  }

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
          name="Wi-fi"
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
          name="TV"
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
          name="Kitchen"
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
          name="Washing Machine"
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
          name="Free Parking Spot"
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
          name="Air Conditioning"
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
          name="Workspace"
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
          name="Pets Allowed"
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
