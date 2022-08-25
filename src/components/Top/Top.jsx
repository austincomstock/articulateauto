import React from "react";
import "./Top.css";
import ArtLogo from "../Images/imgArticulate2.jpg";
import { Search } from "../Search/Search";

export const Top = () => {
  return (
    <div className="Top1">
      <h1 className="TopH1">Articulate Auto</h1>
      <img className="TopImg" src={ArtLogo} alt="Articulate Logo" />
      <Search />
    </div>
  );
};
