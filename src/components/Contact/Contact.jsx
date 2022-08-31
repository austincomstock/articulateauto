import React from "react";
import "./Contact.css";

// REACT-ICONS IMPORTS
import { BsFacebook, BsInstagram, BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

export const Contact = () => {
  return (
    <div className="Contact1">
      <h3 className="ContactH3">Contact & Connect With Us</h3>
      <div className="Contact2">
        <ul className="ContactConnectUL">
          <li>
            <BsFacebook /> Facebook
          </li>
          <li>
            <BsInstagram /> Instagram
          </li>
        </ul>
        <ul className="ContactConnectUL">
          <li>
            <BsTelephone /> 800-000-000
          </li>
          <li>
            <MdOutlineMail /> articulateauto@mail
          </li>
        </ul>
      </div>
    </div>
  );
};
