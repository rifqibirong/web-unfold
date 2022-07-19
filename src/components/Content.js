import React from "react";
import "./Content.css";
import { Link } from "react-router-dom";

function Content() {
  return (
    <div className="mainContent">
      {/* <Link className="link" to="/portofolio">
        <div className="portofolio">Portofolio</div>
      </Link> */}
      <Link className="link" to="/about">
        <div className="about"> About</div>
      </Link>
      <Link className="link" to="/contact">
        <div className="contact"> Contact</div>
      </Link>
    </div>
  );
}

export default Content;
