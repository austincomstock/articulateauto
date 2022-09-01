import React, { useState } from "react";

export const ProductsDropdown = () => {
  // const productOptions = [
  //   { label: "All Products", value: "All Products" },
  //   { label: "Protection", value: "Protection" },
  //   { label: "Lighting", value: "Lighting" },
  //   { label: "Suspension", value: "Suspension" },
  //   { label: "Lift Kits", value: "Lift Kits" },
  //   { label: "Winches & Recovery", value: "Winches & Recovery" },
  //   { label: "Performance", value: "Performance" },
  // ];

  const productOptions = [
    { value: "All Products" },
    { value: "Protection" },
    { value: "Lighting" },
    { value: "Suspension" },
    { value: "Lift Kits" },
    { value: "Winches & Recovery" },
    { value: "Performance" },
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
                {/* {productOptions.label} */}
                {productOptions.value}
              </option>
            </>
          ))}
        </select>
      </label>
      <p>{value}</p>
    </div>
  );
};
