import React, { useState } from "react";

export const ProductsDropdown = () => {
  const productOptions = [
    { label: "--All Products--", value: "--All Products--" },
    { label: "Floormats", value: "Floormats" },
    { label: "Windsheild Wipers", value: "Windsheild Wipers" },
    { label: "Tires", value: "Tires" },
  ];

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="PDrop">
      <label>
        {/* All Products: */}
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
