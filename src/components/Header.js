import { useState } from "react";
import "./Header.css";
import Hector from "./../components/asset/hector.jpg";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Header = () => {
  const [color, setColor] = useState(true);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  const handleClick = () => {
    setColor((current) => !current);
  };

  const [motor, setMotor] = useState({
    brand: "nmax",
    color: "black",
  });

  const changeModel = () => {
    setMotor({
      brand: "supra",
      color: "white",
    });
  };

  // function Header() {
  return (
    <>
      <div className="header">
        <img src={Hector} alt=""></img>
        <div style={{ zIndex: "10" }}>
          <DarkModeSwitch
            style={{ marginBottom: "2rem" }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={12}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
