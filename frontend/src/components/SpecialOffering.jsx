import React, { useState } from "react";

const SpecialOffering = ({ selected, onChange }) => {
  const [selectedCheckbox, setselectedCheckbox] = useState([]);

  const handleCheckboxes = (e) => {
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
  };

  const checkboxBorderClass = (value) =>
    selectedCheckbox.includes(value) ? "border-[#e81a61]" : "border-black/25";

  return (
    <>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${checkboxBorderClass(
          "Pool"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="checkbox"
          name="Pool"
          value="Pool"
          checked={selectedCheckbox.includes("Pool")}
          onChange={handleCheckboxes}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-heavy-showers-line text-[1.1vmax]"></i>
        <span>Pool</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${checkboxBorderClass(
          "Gym"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="checkbox"
          name="Gym"
          value="Gym"
          checked={selectedCheckbox.includes("Gym")}
          onChange={handleCheckboxes}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-glasses-line text-[1.1vmax]"></i>
        <span>Gym</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${checkboxBorderClass(
          "Outdoor Dining"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="checkbox"
          name="Outdoor Dining"
          value="Outdoor Dining"
          checked={selectedCheckbox.includes("Outdoor Dining")}
          onChange={handleCheckboxes}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-restaurant-line text-[1.1vmax]"></i>
        <span>Outdoor Dining</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${checkboxBorderClass(
          "Indoor Games"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="checkbox"
          name="Indoor Games"
          value="Indoor Games"
          checked={selectedCheckbox.includes("Indoor Games")}
          onChange={handleCheckboxes}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-basketball-line text-[1.1vmax]"></i>
        <span>Indoor Games</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${checkboxBorderClass(
          "Jacuzzi"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="checkbox"
          name="Jacuzzi"
          value="Jacuzzi"
          checked={selectedCheckbox.includes("Jacuzzi")}
          onChange={handleCheckboxes}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-coin-fill text-[1.1vmax]"></i>
        <span>Jacuzzi</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${checkboxBorderClass(
          "Firepit"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="checkbox"
          name="Firepit"
          value="Firepit"
          checked={selectedCheckbox.includes("Firepit")}
          onChange={handleCheckboxes}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-fire-line text-[1.1vmax]"></i>
        <span>Firepit</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${checkboxBorderClass(
          "BBQ Grill"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="checkbox"
          name="BBQ Grill"
          value="BBQ Grill"
          checked={selectedCheckbox.includes("BBQ Grill")}
          onChange={handleCheckboxes}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-dice-6-line text-[1.1vmax]"></i>
        <span>BBQ Grill</span>
      </label>
    </>
  );
};

export default SpecialOffering;
