import React from "react";

const SafetyOffering = ({ selected, onChange }) => {
  const offerings = [
    { name: "Fire/Smoke Alarm", icon: "ri-notification-4-line" },
    { name: "First Aid Kit", icon: "ri-first-aid-kit-line" },
    { name: "Fire Extinguisher", icon: "ri-fire-line" },
    { name: "CCTV", icon: "ri-video-add-line" },
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

export default SafetyOffering;
