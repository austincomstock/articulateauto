import React, { useState } from "react";

export const ProductsDropdown = () => {
  const productOptions = [
    { item: "All Products" },
    { item: "Protection" },
    { item: "Lighting" },
    { item: "Suspension" },
    { item: "Lift Kits" },
    { item: "Winches & Recovery" },
    { item: "Performance" },
  ];

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="PDrop">
      <label>
        <select value={value} onChange={handleChange}>
          {React.Children.toArray(
            productOptions.map((productOptions, index) => (
              <>
                <option key={index} value={productOptions.item}>
                  {productOptions.item}
                </option>
              </>
            ))
          )}
        </select>
      </label>
      <p>{value}</p>
    </div>
  );
};
