import React, { useState } from "react";
// import { render } from "react-dom";
import "./Contact.css";

function Contact() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    nomor: "",
  });

  // const handleNumb = (event) => {
  //   event.target.validity.valid ? event.target.value : nomor;
  // };

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }, []);

  const { firstName, lastName, email, nomor } = values;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  // const handleLaststNameInputChange = (event) => {
  //   setValues({ ...values, lastName: event.target.value });
  // };

  // const handleEmailInputChange = (event) => {
  //   setValues({ ...values, email: event.target.value });
  // };

  // const handleNomorInputChange = (event) => {
  //   setValues({ ...values, nomor: event.target.value });
  // };

  return (
    <div className="form-container">
      <form className="register-form">
        <label className="form-field">Input Your Data</label>
        <input
          onChange={handleChange}
          value={firstName}
          className="form-field"
          placeholder="First Name"
          name="firstName"
        />
        <input
          onChange={handleChange}
          value={lastName}
          className="form-field"
          placeholder="Last Name"
          name="lastName"
        />
        <input
          onChange={handleChange}
          value={email}
          className="form-field"
          placeholder="Email"
          name="email"
        />
        <input
          onChange={(event) => {
            setValues({
              ...values,
              nomor: event.target.validity.valid ? event.target.value : nomor,
            });
          }}
          value={nomor}
          className="form-field"
          placeholder="Nomor"
          name="nomor"
          pattern="[0-9]*"
        />
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Contact;
