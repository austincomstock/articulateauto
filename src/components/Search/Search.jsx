import React, { useState } from "react";
import "./Search.css";

const vehicleList = [
  { make: "Toyota", model: "Tacoma" },
  { make: "Ford", model: "F150" },
  { make: "Chevrolet", model: "Silverado" },
  { make: "Hyundai", model: "Tucson" },
  { make: "Ram", model: "Rebel" },
  { make: "Honda", model: "Accord" },
  { make: "Volkswagen", model: "Jetta" },
  { make: "Subaru", model: "Forester" },
  { make: "Jeep", model: "Wrangler" },
];

export const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="Search1">
      <input
        className="SearchInput"
        type="text"
        placeholder="search here"
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        // value={searchInput}
      />
      {vehicleList
        .filter((vehicle) => {
          if (searchInput === "") return false;
          else if (
            vehicle.make.toLowerCase().includes(searchInput.toLowerCase())
          ) {
            return vehicle;
          }
        })
        .map((vehicle, index) => {
          return (
            <div key={index}>
              {vehicle.make}
              {/* {vehicle.model} */}
            </div>
          );
        })}
    </div>
  );
};
