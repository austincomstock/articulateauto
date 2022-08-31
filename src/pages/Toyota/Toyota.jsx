import React from "react";
import "./Toyota.css";
import { Link, Outlet } from "react-router-dom"; // REACT-ROUTER DOCUMENTATION https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md

// IMAGES
import Taco1Img from "./imgTacoma.jpg";
import Runner1Img from "./img4runner.jpg";
import Tundra1Img from "./imgTundra.jpg";
import FJ1Img from "./imgFJ.jpg";

export const Toyota = () => {
  return (
    <div className="Toyota1">
      <Link to="/">App - Close Window</Link>
      <Outlet />
      <h3 className="ToyH3">Toyota</h3>
      <div className="Toyota2">
        Tacoma
        <img className="ToyImg1" src={Taco1Img} alt="Toyota Tacoma" />
        4-Runner
        <img className="ToyImg1" src={Runner1Img} alt="Toyota 4-Runner" />
        Tundra
        <img className="ToyImg1" src={Tundra1Img} alt="Toyota Tundra" />
        FJ
        <img className="ToyImg1" src={FJ1Img} alt="Toyota FJ" />
      </div>
    </div>
  );
};
