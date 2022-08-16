import React from "react";
import "./Top.css";
import ArtLogo from "../Images/imgArticulate2.jpg";
import { Search } from "../Search/Search";

export const Top = () => {
  return (
    <div className="Topz">
      <h1 className="AA">Articulate Auto</h1>
      <img className="Imgz" src={ArtLogo} alt="Articulate Logo" />
      <Search />
    </div>
  );
};
