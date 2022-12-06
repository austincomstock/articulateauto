import React from "react";
import "./Top.css";
import ArtLogo from "../Images/imgArticulate2.jpg";
import { Search } from "../Search/Search";
import { Navigation } from "../Navigation/Navigation";

export const Top = () => {
  return (
    <>
      <div className="Top1">
        <div className="Top2">
          <h1 className="TopH1">Articulate Auto</h1>
          <img className="TopImg" src={ArtLogo} alt="Articulate Logo" />
        </div>
        <Navigation />
        <Search />
      </div>
    </>
  );
};
