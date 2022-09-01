import { React, useState } from "react";

export const ShopVehicleMake = () => {
  const vehicleMake = [
    { label: "Select Make", value: "Select Make" },
    { label: "Toyota", value: "Toyota" },
    { label: "Ford", value: "Ford" },
    { label: "Ram", value: "Ram" },
    { label: "Chevrolet", value: "Chevrolet" },
    { label: "GMC", value: "GMC" },
    { label: "Hyundai", value: "Hyundai" },
    { label: "Volkswagon", value: "Volkswagon" },
  ];

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // TESTING
  if (value === "Toyota") {
    alert("Toyota!!!!! Check the console log...");
    console.log("The console.log for Toyota is working!");
  }

  // TESTING 2
  // if (value === "Toyota") {
  //   alert("Toyota!!!!!");
  // } else {
  //   alert(value);
  // }

  return (
    <div className="ShopVehicleMake1">
      <select value={value} onChange={handleChange}>
        {vehicleMake.map((vehicleMake, index) => (
          <>
            <option key={index} value={vehicleMake.value}>
              {vehicleMake.label}
            </option>
          </>
        ))}
      </select>
      <p>{value}</p>
      {/* <p>{alert(value)}</p> */}
    </div>
  );
};
