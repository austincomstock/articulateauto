import React, { useState } from "react";

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
      <p>{value}</p>
    </div>
  );
};
