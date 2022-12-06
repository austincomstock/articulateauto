import React from "react";
import "./Navigation.css";
import { BsCart3 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { AccountDropdown } from "../Dropdown/AccountDropdown";
import { CartDropdown } from "../Dropdown/CartDropdown";

export const Navigation = () => {
  return (
    // <div className="Nav1">
    <ul className="NavUL">
      <li className="NavLI">
        <VscAccount /> <AccountDropdown />
      </li>
      <li className="NavLI">
        <BsCart3 /> <CartDropdown />
      </li>
    </ul>
    // </div>
  );
};
