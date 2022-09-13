import React from "react";
import "./MyAccount.css";

import { BsFillPersonFill } from "react-icons/bs";

//COMPONENTS
import { Register } from "../Register/Register";
import { SignIn } from "../SignIn/SignIn";

export const MyAccount = () => {
  return (
    <div id="MyAccount1">
      <h3 className="MyAccountH3">
        My Account <BsFillPersonFill />
      </h3>
      <div id="MyAccount2">
        <Register />
        <SignIn />
      </div>
    </div>
  );
};
