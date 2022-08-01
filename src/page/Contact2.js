import { useState } from "react";

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

  return (
    <div>
      <h3>
        it is {motor.brand} its color a {motor.color}
      </h3>
      <button onClick={changeModel}> Click </button>
    </div>
  );
};

export default Bike;
