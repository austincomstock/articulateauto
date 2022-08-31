import React, { useState } from "react";

export const AccountDropdown = () => {
  const accountOptions = [
    { label: "My Account", value: "My Account" },
    { label: "Login", value: "Login" },
    { label: "Register", value: "Register" },
    { label: "Settings", value: "Settings" },
  ];

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="ADrop">
      <label>
        <select value={value} onChange={handleChange}>
          {accountOptions.map((accountOptions, index) => (
            <>
              <option key={index} value={accountOptions.value}>
                {accountOptions.label}
              </option>
            </>
          ))}
        </select>
      </label>
      <p>{value}</p>
    </div>
  );
};
