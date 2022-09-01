import React from "react";
import "./Toyota.css";
import { Link, Outlet } from "react-router-dom"; // REACT-ROUTER DOCUMENTATION https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md
import { SiToyota } from "react-icons/si";

// IMAGES
import Taco1Img from "./imgTacoma.jpg";
import Runner1Img from "./img4runner.jpg";
import Tundra1Img from "./imgTundra.jpg";
import FJ1Img from "./imgFJ.jpg";

export const Toyota = () => {
  return (
    <div className="Toyota1">
      <Link to="/" className="ToyLink">
        App - Close Window
      </Link>
      <Outlet />
      <h3 className="ToyH3">
        Toyota <SiToyota />
      </h3>
      <ul className="ToyotaUL">
        <li className="ToyotaLI">
          Tacoma
          <img className="ToyImg1" src={Taco1Img} alt="Toyota Tacoma" />
        </li>
        <li className="ToyotaLI">
          4-Runner
          <img className="ToyImg1" src={Runner1Img} alt="Toyota 4-Runner" />
        </li>
        <li className="ToyotaLI">
          Tundra
          <img className="ToyImg1" src={Tundra1Img} alt="Toyota Tundra" />
        </li>
        <li className="ToyotaLI">
          FJ Cruiser
          <img className="ToyImg1" src={FJ1Img} alt="Toyota FJ" />
        </li>
      </ul>
    </div>
  );
};
