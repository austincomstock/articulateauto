import React, { useState } from "react";

export const CartDropdown = () => {
  const cartOptions = [
    { label: "--Shopping Cart--", value: "--Shopping Cart--" },
    { label: "View Cart", value: "View Cart" },
    { label: "Checkout", value: "Checkout" },
  ];

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="CDrop">
      <label>
        <select value={value} onChange={handleChange}>
          {cartOptions.map((cartOptions, index) => (
            <>
              <option key={index} value={cartOptions.value}>
                {cartOptions.label}
              </option>
            </>
          ))}
        </select>
      </label>
      <p>{value}</p>
    </div>
  );
};
