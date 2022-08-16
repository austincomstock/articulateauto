import React from "react";
import "./Navigation.css";
import { BsTruck, BsCart3 } from "react-icons/bs";
import { TbSitemap } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";
import { VehicleDropdown } from "../Dropdown/VehicleDropdown";
import { ProductsDropdown } from "../Dropdown/ProductsDropdown";
import { AccountDropdown } from "../Dropdown/AccountDropdown";
import { CartDropdown } from "../Dropdown/CartDropdown";

export const Navigation = () => {
  return (
    <div className="Navy">
      {/* LIST */}
      <ul className="NavyUL">
        <li className="NavyLI">
          <VehicleDropdown /> <BsTruck />
        </li>
        <li className="NavyLI">
          <ProductsDropdown /> <TbSitemap />
        </li>
        <li className="NavyLI">
          <AccountDropdown /> <VscAccount />
        </li>
        <li className="NavyLI">
          <CartDropdown /> <BsCart3 />
        </li>
      </ul>
    </div>
  );
};
