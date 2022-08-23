import React from "react";
import "./About.css";

// REACT-ICONS IMPORTS
import { MdSecurity } from "react-icons/md";
import { GiFogLight, GiSpring, GiTowTruck } from "react-icons/gi";
import { TbEngine, TbSitemap } from "react-icons/tb";

export const About = () => {
  return (
    <div className="About1">
      <h3 className="AboutH3">Automotive Upgrades</h3>
      <ul className="AboutUL">
        <li className="AboutLI">
          <MdSecurity /> Interior & Exterior Protection
        </li>
        <li className="AboutLI">
          <GiFogLight /> Lighting
        </li>
        <li className="AboutLI">
          <GiSpring /> Suspension & Lift Kits
        </li>
        <li className="AboutLI">
          <GiTowTruck /> Winches & Recovery
        </li>
        <li className="AboutLI">
          <TbEngine /> Performance
        </li>
        <li className="AboutLI">
          <TbSitemap /> All Products
        </li>
      </ul>
    </div>
  );
};
