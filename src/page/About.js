import React from "react";
import "./About.css";
import Lottie from "react-lottie";
import Aboutme from "../components/asset/74050-lazy-boy.json";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

function About() {
  const lazy = {
    loop: true,
    autoplay: true,
    animationData: Aboutme,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="mainAbout">
        <div className="wrapper-icon">
          <Link className="link-home" to="/">
            <AiFillHome className="rumah" />
          </Link>
        </div>
        <div className="ava">
          <Lottie options={lazy} />
        </div>
      </div>
      <div className="wrapper">
        <div className="line">
          <div className="line1"></div>
          {/* <div className="icon-b"> */}
          <a href="https://github.com/rifqibirong">
            <FaGithub className="git" />
          </a>
          <a href="https://facebook.com/rifqi.ramadhansyach.9/">
            <FaFacebookF className="fb" />
          </a>
          <a href="mailto: rifqi.ramadhansyach18@gmail.com">
            <FiMail className="mail" />
          </a>
          <a href="https://www.linkedin.com/in/rifqi-ramadhansyach-323b13244">
            <BsLinkedin className="linkedin" />
          </a>
          {/* </div> */}
          <div className="line2"></div>
        </div>
      </div>
      {/* ==== content */}
      <div className="text-section">
        <p>I'm Rifqi Ramadhansyach </p>
      </div>
    </>
  );
}

export default About;
