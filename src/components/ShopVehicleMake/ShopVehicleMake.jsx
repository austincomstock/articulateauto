import { React, useState } from "react";
import { Link } from "react-router-dom"; // REACT-ROUTER DOCUMENTATION https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md

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

  // valueIsToyota function
  function valueIsToyota() {
    if (value === "Toyota") {
      // console.log("The console.log for Select Make 'Toyota' is working!");
      return (
        <Link to="/toyota" className="Linky">
          Toyota
        </Link>
      );
    } else {
      return value;
    }
  }

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
      {/* <p>{value}</p> */}
      <p>{valueIsToyota()}</p>
    </div>
  );
};
