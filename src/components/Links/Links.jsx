import React from "react";
import "./Links.css";
import { Link, Outlet } from "react-router-dom"; // REACT-ROUTER DOCUMENTATION https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md

export const Links = () => {
  return (
    <div className="Links1">
      <h3 className="LinksH3">Links</h3>
      <Link to="/" className="Linky">
        App
      </Link>
      {/* <Link to="/top" className="Linky">
        Top
      </Link>
      <Link to="/about" className="Linky">
        About
      </Link> */}
      <Link to="/protection" className="Linky">
        Interior & Exterior Protection
      </Link>
      <Link to="/toyota" className="Linky">
        Toyota
      </Link>
      <Link to="/ford" className="Linky">
        Ford
      </Link>
      <Link to="/chevrolet" className="Linky">
        Chevrolet
      </Link>
      <Outlet />
    </div>
  );
};
