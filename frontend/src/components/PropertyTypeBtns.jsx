import React, { useState } from "react";

const PropertyTypeBtns = ({ selected, onChange }) => {
  const [highlightProperty, setHighlightProperty] = useState("");

  const handleRadioChange = (e) => {
    const { checked, name } = e.target;
    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange([...selected.filter((selectedName) => selectedName !== name)]);
    }
    setHighlightProperty(e.target.value);
  };

  const radioBorderClass = (value) =>
    highlightProperty === value ? "border-[#e81a61]" : "border-black/25";

  return (
    <>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${radioBorderClass(
          "House"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="radio"
          name="House"
          value="House"
          checked={highlightProperty === "House"}
          onChange={handleRadioChange}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-home-heart-line text-[1.1vmax]"></i>
        <span>House</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${radioBorderClass(
          "Flat/Apartment"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="radio"
          name="Flat/Apartment"
          value="Flat/Apartment"
          checked={highlightProperty === "Flat/Apartment"}
          onChange={handleRadioChange}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-community-line text-[1.1vmax]"></i>
        <span>Flat/Apartment</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${radioBorderClass(
          "Farmhouse"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="radio"
          name="Farmhouse"
          value="Farmhouse"
          checked={highlightProperty === "Farmhouse"}
          onChange={handleRadioChange}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-ancient-gate-line text-[1.1vmax]"></i>
        <span>Farmhouse</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${radioBorderClass(
          "Bunglow"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="radio"
          name="Bunglow"
          value="Bunglow"
          checked={highlightProperty === "Bunglow"}
          onChange={handleRadioChange}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-bank-line text-[1.1vmax]"></i>
        <span>Bunglow</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${radioBorderClass(
          "Villa"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="radio"
          name="Villa"
          value="Villa"
          checked={highlightProperty === "Villa"}
          onChange={handleRadioChange}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-government-line text-[1.1vmax]"></i>
        <span>Villa</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${radioBorderClass(
          "Hotel"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="radio"
          name="Hotel"
          value="Hotel"
          checked={highlightProperty === "Hotel"}
          onChange={handleRadioChange}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-hotel-line text-[1.1vmax]"></i>
        <span>Hotel</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${radioBorderClass(
          "Guest House"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="radio"
          name="Guest House"
          value="Guest House"
          checked={highlightProperty === "Guest House"}
          onChange={handleRadioChange}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-building-line text-[1.1vmax]"></i>
        <span>Guest House</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${radioBorderClass(
          "Houseboat"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="radio"
          name="Houseboat"
          value="Houseboat"
          checked={highlightProperty === "Houseboat"}
          onChange={handleRadioChange}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-sailboat-line text-[1.1vmax]"></i>
        <span>Houseboat</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${radioBorderClass(
          "Yacht"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="radio"
          name="Yacht"
          value="Yacht"
          checked={highlightProperty === "Yacht"}
          onChange={handleRadioChange}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-ship-2-line text-[1.1vmax]"></i>
        <span>Yacht</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${radioBorderClass(
          "TreeHouse"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="radio"
          name="TreeHouse"
          value="TreeHouse"
          checked={highlightProperty === "TreeHouse"}
          onChange={handleRadioChange}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-tree-line text-[1.1vmax]"></i>
        <span>TreeHouse</span>
      </label>
    </>
  );
};

export default PropertyTypeBtns;
