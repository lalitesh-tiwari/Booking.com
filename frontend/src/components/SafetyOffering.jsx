import React, { useState } from "react";

const SafetyOffering = ({checked,onChange}) => {
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
          "Fire/Smoke Alarm"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="checkbox"
          value="Fire/Smoke Alarm"
          checked={selectedCheckbox.includes("Fire/Smoke Alarm")}
          onChange={handleCheckboxes}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-notification-4-line text-[1.1vmax]"></i>
        <span>Fire/Smoke Alarm</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${checkboxBorderClass(
          "First Aid Kit"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="checkbox"
          value="First Aid Kit"
          checked={selectedCheckbox.includes("First Aid Kit")}
          onChange={handleCheckboxes}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-first-aid-kit-line text-[1.1vmax]"></i>
        <span>First Aid Kit</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${checkboxBorderClass(
          "Fire Extinguisher"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="checkbox"
          value="Fire Extinguisher"
          checked={selectedCheckbox.includes("Fire Extinguisher")}
          onChange={handleCheckboxes}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-fire-line text-[1.1vmax]"></i>
        <span>Fire Extinguisher</span>
      </label>
      <label
        className={`flex items-center gap-1 cursor-pointer border-[2px] ${checkboxBorderClass(
          "CCTV"
        )} rounded-md p-[1vmax]`}
      >
        <input
          type="checkbox"
          value="CCTV"
          checked={selectedCheckbox.includes("CCTV")}
          onChange={handleCheckboxes}
          className="cursor-pointer h-[1vmax]"
        />
        <i className="ri-video-add-line text-[1.1vmax]"></i>
        <span>CCTV </span>
      </label>
    </>
  );
};

export default SafetyOffering;
