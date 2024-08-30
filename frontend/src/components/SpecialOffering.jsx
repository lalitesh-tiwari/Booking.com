import React from "react";

const SpecialOffering = ({ selected, onChange }) => {
  const offerings = [
    { name: "Pool", icon: "ri-heavy-showers-line" },
    { name: "Gym", icon: "ri-glasses-line" },
    { name: "Outdoor Dining", icon: "ri-restaurant-line" },
    { name: "Indoor Games", icon: "ri-basketball-line" },
    { name: "Jacuzzi", icon: "ri-coin-fill" },
    { name: "Firepit", icon: "ri-fire-line" },
    { name: "BBQ Grill", icon: "ri-dice-6-line" },
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

export default SpecialOffering;
