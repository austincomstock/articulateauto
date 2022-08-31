import { React, useState } from "react";

export const ShopVehicleModel = () => {
  const vehicleModel = [
    { label: "Select Model", value: "Select Model" },
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
    <div className="ShopVehicleModel1">
      {/* FORM */}
      <form>
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
      </form>
    </div>
  );
};
