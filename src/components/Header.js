// import { useState } from "react";
import React from "react";
import "./Header.css";
import Hector from "./../components/asset/hector.jpg";
// import { DarkModeSwitch } from "react-toggle-dark-mode";

const Header = () => {
  return (
    <div>
      <div className="header">
        <img src={Hector} alt=""></img>
      </div>
    </div>
  );
};

export default Header;
