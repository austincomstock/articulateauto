import React from "react";
import "./Chevrolet.css";
import { Link, Outlet } from "react-router-dom"; // REACT-ROUTER DOCUMENTATION https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md
import { SiChevrolet } from "react-icons/si";

//IMAGES
import Colorado1Img from "./imgColorado.jpg";
import Silverado1Img from "./imgNewChevy.jpg";
import SilveradoHD1Img from "./imgSilveradoHD.jpg";
import Tahoe1Img from "./imgTahoe.jpg";
// import Suburban1Img from

export const Cheverolet = () => {
  return (
    <div className="Chevy1">
      <Link to="/" className="ChevyLink">
        App - Close Window
      </Link>
      <Outlet />
      <h3 className="ChevyH3">
        Chevrolet <SiChevrolet />
      </h3>
      <ul className="ChevyUL">
        <li className="ChevyLI">
          Tahoe
          <img className="ChevyImg1" src={Tahoe1Img} alt="Chevy Tahoe" />
        </li>
        {/* <li className="ChevyLI">
          Suburban
          <img className="ChevyImg1" src={Suburban1Img} alt="Chevy Suburban" />
        </li> */}
        <li className="ChevyLI">
          Colorado
          <img className="ChevyImg1" src={Colorado1Img} alt="Chevy Colorado" />
        </li>
        <li className="ChevyLI">
          Silverado
          <img
            className="ChevyImg1"
            src={Silverado1Img}
            alt="Chevy Silverado"
          />
        </li>
        <li className="ChevyLI">
          Silverado HD
          <img
            className="ChevyImg1"
            src={SilveradoHD1Img}
            alt="Chevy Silverado HD"
          />
        </li>
      </ul>
    </div>
  );
};
