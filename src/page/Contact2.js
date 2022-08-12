import { useState } from "react";
import "./Contact.css";
import { DarkModeSwitch } from "react-toggle-dark-mode";

// const Contact = () => {
//   const [name, setName] = useState("dama");

//   const changeName = () => {
//     setName("rifqi");
//   };

//   return (
//     <div style={{ color: "white" }}>
//       <button onClick={() => changeName()}>Test Invoke</button>
//       <div>Contact</div>
//       <div style={{ backgroundColor: "red" }}>{name}</div>
//     </div>
//   );
// };

const Bike = () => {
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

  const defaultProperties = {
    dark: {
      circle: {
        r: 9,
      },
      mask: {
        cx: "50%",
        cy: "23%",
      },
      svg: {
        transform: "rotate(40deg)",
      },
      lines: {
        opacity: 0,
      },
    },
    light: {
      circle: {
        r: 5,
      },
      mask: {
        cx: "100%",
        cy: "0%",
      },
      svg: {
        transform: "rotate(90deg)",
      },
      lines: {
        opacity: 1,
      },
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  };

  return (
    <div>
      <DarkModeSwitch
        animationProperties={defaultProperties}
        style={{ marginBottom: "2rem" }}
        checked={isDarkMode}
        moonColor="red"
        onChange={toggleDarkMode}
        size={120}
      />
    </div>
  );
};

export default Bike;
