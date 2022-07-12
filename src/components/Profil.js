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
        <h4>Hi There! </h4>
        <h3>I'm BIRONGCODE</h3>
      </div>
    </div>
  );
}

export default Profil;
