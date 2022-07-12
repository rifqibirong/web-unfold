import React from "react";
import "./Icon.css";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

function Icon() {
  return (
    <div className="mainIcon">
      <div className="icon">
        <div className="icon-bg">
          <FaGithub className="git" />
        </div>
        <div className="icon-bg">
          <FaFacebookF className="fb" />
        </div>
        <div className="icon-bg">
          <FiMail className="mail" />
        </div>
        <div className="icon-bg">
          <a href="https://www.linkedin.com/in/rifqi-ramadhansyach-323b13244">
            <BsLinkedin className="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Icon;
