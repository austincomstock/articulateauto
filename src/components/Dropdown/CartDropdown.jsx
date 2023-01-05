import React, { useState } from "react";
import { Cart } from "../Cart/Cart";
import { Checkout } from "./../Checkout/Checkout";

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

  // cartDropdownSelection function
  function cartDropdownSelection() {
    if (value === "View Cart") {
      return <Cart />;
    } else if (value === "Checkout") {
      return <Checkout />;
    } else {
      return value;
    }
  }

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
      {cartDropdownSelection()}
    </div>
  );
};
