import React from "react";
import "./Icon.css";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";

function Icon() {
  return (
    <div className="mainIcon">
      <div className="icon">
        <BsInstagram className="ig" />
        <FaFacebookF className="fb" />
        <FiMail className="mail" />
        <FaTwitter className="twitter" />
      </div>
    </div>
  );
}

export default Icon;
