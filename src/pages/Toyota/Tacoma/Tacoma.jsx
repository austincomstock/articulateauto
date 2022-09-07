import React from "react";
import "./Tacoma.css";
import { Link, Outlet } from "react-router-dom"; // REACT-ROUTER DOCUMENTATION https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md

// IMAGES
import TacoLighting1Img from "./imgTacoma1.jpg";
import TacoBumper1Img from "./imgTacoma3.jpg";
import Performance1Img from "./imgPerformance.jpg";
import Interior1Img from "./imgInterior.jpg";
import TacoSuspension1Img from "./imgTacoma4.jpg";
import TacoExterior1Img from "./imgTacoma5.jpg";

export const Tacoma = () => {
  return (
    <div className="Tacoma1">
      <Link to="/" className="Link1">
        App - Close Window
      </Link>
      <Outlet />
      <h3 className="TacomaH3">Tacoma</h3>
      <div className="ProductCategoryContainer">
        <div className="ProductCategory">
          Suspension & Lift Kits
          <img
            className="ProductCategoryImg"
            src={TacoSuspension1Img}
            alt="Suspension"
          />
        </div>
        <div className="ProductCategory">
          Interior Accessories
          <img
            className="ProductCategoryImg"
            src={Interior1Img}
            alt="Interior"
          />
        </div>
        <div className="ProductCategory">
          Exterior Accessories
          <img
            className="ProductCategoryImg"
            src={TacoExterior1Img}
            alt="Exterior"
          />
        </div>
        <div className="ProductCategory">
          Bumpers & Rock Sliders
          <img
            className="ProductCategoryImg"
            src={TacoBumper1Img}
            alt="Bumpers"
          />
        </div>
        <div className="ProductCategory">
          Lighting
          <img
            className="ProductCategoryImg"
            src={TacoLighting1Img}
            alt="Lighting"
          />
        </div>
        <div className="ProductCategory">
          Performance Parts
          <img
            className="ProductCategoryImg"
            src={Performance1Img}
            alt="Performance"
          />
        </div>
      </div>
    </div>
  );
};
