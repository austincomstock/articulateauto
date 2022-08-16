import React, { useState } from "react";

export const VehicleDropdown = () => {
  const vehicleOptions = [
    { label: "Toyota", value: "Toyota" },
    { label: "Ford", value: "Ford" },
    { label: "Ram", value: "Ram" },
    { label: "Chevrolet", value: "Chevrolet" },
    { label: "GMC", value: "GMC" },
  ];

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="VDrop">
      <label>
        {/* Shop By Vehicle: */}
        <select value={value} onChange={handleChange}>
          {vehicleOptions.map((vehicleOptions, index) => (
            <>
              <option>--Shop By Vehicle--</option>
              <option key={index} value={vehicleOptions.value}>
                {vehicleOptions.label}
              </option>
            </>
          ))}
        </select>
      </label>
      <p>{value}</p>
    </div>
  );
};
