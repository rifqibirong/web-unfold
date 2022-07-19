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
        <h3>Hi There!</h3>
        <h2>I'm BIRONGCODE</h2>
      </div>
    </div>
  );
}

export default Profil;
