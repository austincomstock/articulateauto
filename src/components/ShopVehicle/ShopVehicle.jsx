import React from "react";
import "./ShopVehicle.css";
import { BsTruck } from "react-icons/bs";

// COMPONENTS
import { ShopVehicleMake } from "../ShopVehicleMake/ShopVehicleMake";
import { ShopVehicleModel } from "../ShopVehicleModel/ShopVehicleModel";
import { ShopVehicleYear } from "../ShopVehicleYear/ShopVehicleYear";

export const ShopVehicle = () => {
  return (
    <div className="ShopVehicle1">
      <h3 className="ShopVehicleH3">
        Shop By Vehicle <BsTruck />
      </h3>
      <div className="ShopVehicle2">
        <ShopVehicleMake />
        <ShopVehicleModel />
        <ShopVehicleYear />
      </div>
    </div>
  );
};
