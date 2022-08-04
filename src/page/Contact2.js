import { useState } from "react";
import "./Contact.css";

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
  // const [count, setCount] = useState(0);
  const [color, setColor] = useState(true);

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

  // const Increment = () => {
  //   setCount((prev) => prev * 2);
  // };

  return (
    <div
      style={{
        backgroundColor: color ? "red" : "",
        color: color ? "white" : "",
      }}
      onClick={handleClick}
    >
      <h3 className={motor.color === "white" && "supra"}>
        it is {motor.brand} its color a {motor.color}
      </h3>
      {/* <h1>{count}</h1> */}
      <button onClick={changeModel}> Click </button>
    </div>
  );
};

export default Bike;
