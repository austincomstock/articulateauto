import React, { useState } from "react";

export const ProductsDropdown = () => {
  const productOptions = [
    { label: "--All Products--", value: "--All Products--" },
    { label: "Protection", value: "Protection" },
    { label: "Lighting", value: "Lighting" },
    { label: "Suspension", value: "Suspension" },
    { label: "Lift Kits", value: "Lift Kits" },
    { label: "Winches & Recovery", value: "Winches & Recovery" },
    { label: "Performance", value: "Performance" },
  ];

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="PDrop">
      <label>
        <select value={value} onChange={handleChange}>
          {productOptions.map((productOptions, index) => (
            <>
              <option key={index} value={productOptions.value}>
                {productOptions.label}
              </option>
            </>
          ))}
        </select>
      </label>
      {/* <p>Product is {value}!</p> */}
      <p>{value}</p>
    </div>
  );
};
