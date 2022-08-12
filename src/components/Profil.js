import React from "react";
import "./Profil.css";
// import Ava from "./../components/asset/ava.jpg";
import Beard from "./asset/69466-nerdy-boy-blinking-eyes.json";
import Lottie from "react-lottie";
// import {BsInstagram} from 'react-icons/bs'

function Profil() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Beard,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="profil">
      <div className="avatar">
        <Lottie options={defaultOptions} />
      </div>
      {/* <img src={Ava} alt="" /> */}
      <div className="nama">
        <div className="text-intro">
          <h3>Hi I'm BIRONGCODE</h3>
          <p>👋</p>
        </div>
        <h2>IT Support in Dailybox</h2>
      </div>
    </div>
  );
}

export default Profil;
