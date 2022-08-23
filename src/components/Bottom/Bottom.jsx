import React from "react";
import "./Bottom.css";

// REACT-ICONS IMPORTS
import { BsFacebook, BsInstagram, BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

export const Bottom = () => {
  return (
    <div className="Bottom1">
      <h3 className="BottomH3">Contact & Connect With Us</h3>
      <h5 className="BottomH5">Contact</h5>
      <ul className="BottomUL">
        <li>
          <BsTelephone /> 800-000-000
        </li>
        <li>
          <MdOutlineMail /> articulateauto@mail.placeholder
        </li>
      </ul>
      <h5 className="BottomH5">Connect</h5>
      <ul className="BottomUL">
        <li>
          <BsFacebook /> Facebook
        </li>
        <li>
          <BsInstagram /> Instagram
        </li>
      </ul>
    </div>
  );
};
