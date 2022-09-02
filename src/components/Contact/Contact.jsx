import React from "react";
import "./Contact.css";

// REACT-ICONS IMPORTS
import { BsFacebook, BsInstagram, BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

export const Contact = () => {
  return (
    <div className="Contact1">
      <h3 className="ContactH3">Connect With Us</h3>

      <ul className="ContactConnectUL">
        <li>
          <a
            href="https://www.facebook.com/ArticulateAuto"
            target="_blank"
            rel="noreferrer"
            className="HLink"
          >
            <BsFacebook /> Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/articulate_auto/"
            target="_blank"
            rel="noreferrer"
            className="HLink"
          >
            <BsInstagram /> Instagram
          </a>
        </li>
        <li>
          <BsTelephone /> 800-000-000
        </li>
        <li>
          <MdOutlineMail /> info.articulateauto@gmail.com
        </li>
      </ul>
    </div>
  );
};
