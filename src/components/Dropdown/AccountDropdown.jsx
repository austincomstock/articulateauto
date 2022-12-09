import React, { useState } from "react";
import { SignIn } from "./../SignIn/SignIn";
import { Register } from "./../Register/Register";

export const AccountDropdown = () => {
  const accountOptions = [
    { item: "My Account" },
    { item: "Sign In" },
    { item: "Register" },
  ];

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // accountDropdownSelection function
  function accountDropdownSelection() {
    if (value === "Sign In") {
      return <SignIn />;
    } else if (value === "Register") {
      return <Register />;
    } else {
      return value;
    }
  }

  return (
    <div className="ADrop">
      <label>
        <select value={value} onChange={handleChange}>
          {React.Children.toArray(
            accountOptions.map((accountOptions, index) => (
              <>
                <option key={index} value={accountOptions.item}>
                  {accountOptions.item}
                </option>
              </>
            ))
          )}
        </select>
      </label>
      <p>{accountDropdownSelection()}</p>
    </div>
  );
};
