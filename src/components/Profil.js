import React from "react";
import "./Profil.css";
import Ava from "./../components/asset/ava.jpg";
// import {BsInstagram} from 'react-icons/bs'

function Profil() {
  return (
    <div className="profil">
      <div className="avatar">
        <img src={Ava} alt="" />
      </div>
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
