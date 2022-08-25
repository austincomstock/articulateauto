import React from "react";
import "./Navigation.css";
import { BsCart3 } from "react-icons/bs";
import { TbSitemap } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";
import { ProductsDropdown } from "../Dropdown/ProductsDropdown";
import { AccountDropdown } from "../Dropdown/AccountDropdown";
import { CartDropdown } from "../Dropdown/CartDropdown";

export const Navigation = () => {
  return (
    <div className="Nav1">
      {/* LIST */}
      <ul className="NavUL">
        <li className="NavLI">
          <ProductsDropdown /> <TbSitemap />
        </li>
        <li className="NavLI">
          <AccountDropdown /> <VscAccount />
        </li>
        <li className="NavLI">
          <CartDropdown /> <BsCart3 />
        </li>
      </ul>
    </div>
  );
};
