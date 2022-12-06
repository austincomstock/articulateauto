import React, { useState } from "react";

export const CartDropdown = () => {
  const cartOptions = [
    { item: "Shopping Cart" },
    { item: "View Cart" },
    { item: "Checkout" },
  ];

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="CDrop">
      <label>
        <select value={value} onChange={handleChange}>
          {React.Children.toArray(
            cartOptions.map((cartOptions, index) => (
              <>
                <option key={index} value={cartOptions.item}>
                  {cartOptions.item}
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
