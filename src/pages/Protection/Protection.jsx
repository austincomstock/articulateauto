import React from "react";
import "./Protection.css";
import InteriorImg from "./imgInterior.jpg";
import ExteriorImg from "./imgExterior.jpg";
import { Link, Outlet } from "react-router-dom"; // REACT-ROUTER DOCUMENTATION https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md

export const Protection = () => {
  return (
    <div className="Protection1">
      <Link to="/">App - Close Window</Link>
      <Outlet />
      <h3>Interior & Exterior Protection</h3>
      <div>
        Interior Protection:
        <ul>
          <li>Floor Liners</li>
          <li>Floor Mats</li>
          <li>Seat Protection</li>
        </ul>
        <img className="ProImg1" src={InteriorImg} alt="Automotive Interior" />
      </div>
      <div>
        Exterior Protection:
        <ul>
          <li>Mud Flaps</li>
          <li>Hood & Window Deflectors</li>
          <li>Car & Truck Covers</li>
        </ul>
        <img className="ProImg1" src={ExteriorImg} alt="Automotive Exterior" />
      </div>
    </div>
  );
};
