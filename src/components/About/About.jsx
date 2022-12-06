import React from "react";
import "./About.css";
import { Link, Outlet } from "react-router-dom"; // REACT-ROUTER DOCUMENTATION https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md

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
          <Link to="/" className="Linky">
            Home
          </Link>
        </li>
        <li className="AboutLI">
          <Link to="/protection">
            <MdSecurity /> Interior & Exterior Protection
          </Link>
        </li>
        <li className="AboutLI">
          <Link to="/toyota" className="Linky">
            Toyota
          </Link>
        </li>
        <li className="AboutLI">
          <Link to="/ford" className="Linky">
            Ford
          </Link>
        </li>
        <li className="AboutLI">
          <Link to="/chevrolet" className="Linky">
            Chevrolet
          </Link>
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
      <Outlet />
    </div>
  );
};
