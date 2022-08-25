import { React, useState } from "react";
import "./ShopVehicle.css";
import { BsTruck } from "react-icons/bs";

export const ShopVehicle = () => {
  const vehicleYear = [
    { label: "--Select Year--", value: "--Select Year--" }, // Ask Tony on how I should do this.
    { label: "1990", value: "1990" },
    { label: "1991", value: "1991" },
    { label: "1992", value: "1992" },
    { label: "1993", value: "1993" },
    { label: "1994", value: "1994" },
    { label: "1995", value: "1995" },
    { label: "1996", value: "1996" },
    { label: "1997", value: "1997" },
    { label: "1998", value: "1998" },
    { label: "1999", value: "1999" },
    { label: "2000", value: "2000" },
    { label: "2001", value: "2001" },
    { label: "2002", value: "2002" },
    { label: "2003", value: "2003" },
    { label: "2004", value: "2004" },
    { label: "2005", value: "2005" },
    { label: "2006", value: "2006" },
    { label: "2007", value: "2007" },
    { label: "2008", value: "2008" },
    { label: "2009", value: "2009" },
    { label: "2010", value: "2010" },
    { label: "2011", value: "2011" },
    { label: "2012", value: "2012" },
    { label: "2013", value: "2013" },
    { label: "2014", value: "2014" },
    { label: "2015", value: "2015" },
    { label: "2016", value: "2016" },
    { label: "2017", value: "2017" },
    { label: "2018", value: "2018" },
    { label: "2019", value: "2019" },
    { label: "2020", value: "2020" },
    { label: "2021", value: "2021" },
    { label: "2022", value: "2022" },
  ];

  const vehicleMake = [
    { label: "--Select Make--", value: "--Select Make--" },
    { label: "Toyota", value: "Toyota" },
    { label: "Ford", value: "Ford" },
    { label: "Ram", value: "Ram" },
    { label: "Chevrolet", value: "Chevrolet" },
    { label: "GMC", value: "GMC" },
    { label: "Hyundai", value: "Hyundai" },
    { label: "Volkswagon", value: "Volkswagon" },
  ];

  const vehicleModel = [
    { label: "--Select Model--", value: "--Select Model--" },
    { label: "Tacoma", value: "Tacoma" },
    { label: "F-150", value: "F-150" },
    { label: "TRX 1500", value: "TRX 1500" },
    { label: "Silverado", value: "Silverado" },
    { label: "Sierra 1500", value: "Sierra 1500" },
    { label: "Tucson", value: "Tucson" },
    { label: "Jetta", value: "Jetta" },
  ];

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="ShopVehicle1">
      <h3 className="ShopVehicleH3">
        Shop By Vehicle <BsTruck />
      </h3>

      <div className="ShopVehicle2">
        <div className="ShopVehicleDD">
          <label>
            {/* Shop By Vehicle Year: */}
            <select value={value} onChange={handleChange}>
              {vehicleYear.map((vehicleYear, index) => (
                <>
                  <option key={index} value={vehicleYear.value}>
                    {vehicleYear.label}
                  </option>
                </>
              ))}
            </select>
          </label>
          <p>{value}</p>
        </div>

        <div className="ShopVehicleDD">
          <label>
            {/* Shop By Vehicle Make: */}
            <select value={value} onChange={handleChange}>
              {vehicleMake.map((vehicleMake, index) => (
                <>
                  <option key={index} value={vehicleMake.value}>
                    {vehicleMake.label}
                  </option>
                </>
              ))}
            </select>
          </label>
          <p>{value}</p>
        </div>

        <div className="ShopVehicleDD">
          <label>
            {/* Shop By Vehicle Model: */}
            <select value={value} onChange={handleChange}>
              {vehicleModel.map((vehicleModel, index) => (
                <>
                  <option key={index} value={vehicleModel.value}>
                    {vehicleModel.label}
                  </option>
                </>
              ))}
            </select>
          </label>
          <p>{value}</p>
        </div>
      </div>
    </div>
  );
};
