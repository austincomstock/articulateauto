import React from "react";
import "./Ford.css";

import { Link, Outlet } from "react-router-dom"; // REACT-ROUTER DOCUMENTATION https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md
import { SiFord } from "react-icons/si";

// IMAGES
import F3501Img from "./imgF350.jpg";
import Bronco1Img from "./imgBronco.jpg";
import Raptor1Img from "./imgRaptor.jpg";
import Ranger1Img from "./imgRanger.jpg";

export const Ford = () => {
  return (
    <div className="Ford1">
      <Link to="/" className="FordLink">
        App - Close Window
      </Link>
      <Outlet />
      <h3 className="FordH3">
        Ford <SiFord />
      </h3>
      <ul className="FordUL">
        <li className="FordLI">
          Bronco
          <img className="FordImg1" src={Bronco1Img} alt="Ford Bronco" />
        </li>
        <li className="FordLI">
          Ranger
          <img className="FordImg1" src={Ranger1Img} alt="Ford Ranger" />
        </li>
        <li className="FordLI">
          Raptor
          <img className="FordImg1" src={Raptor1Img} alt="Ford Raptor" />
        </li>
        {/* <li className="FordLI">
          F-150
          <img className="FordImg1" src={F1501Img} alt="Ford F-150" />
        </li> */}
        {/* <li className="FordLI">
          F-250
          <img className="FordImg1" src={F2501Img} alt="Ford F-250" />
        </li> */}
        {/* <li className="FordLI">
          F-350
          <img className="FordImg1" src={F3501Img} alt="Ford F-350" />
        </li> */}
        <li className="FordLI">
          F-Series
          <img className="FordImg1" src={F3501Img} alt="Ford F-350" />
        </li>
      </ul>
    </div>
  );
};
