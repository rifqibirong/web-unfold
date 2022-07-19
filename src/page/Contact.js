import React, { useEffect, useState } from "react";
// import { render } from "react-dom";
import "./Contact.css";

function Contact() {
  const [values, setValues] = useState({
    firsName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firsName: event.target.value });
  };

  const handleLaststNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  return (
    <div className="form-container">
      <form className="register-form">
        <label className="form-field">Input Your Data</label>
        <input
          onChange={handleFirstNameInputChange}
          value={values.firsName}
          className="form-field"
          placeholder="First Name"
          name="firstName"
        />
        <input
          onChange={handleLaststNameInputChange}
          value={values.lastName}
          className="form-field"
          placeholder="Last Name"
          name="lastName"
        />
        <input
          onChange={handleEmailInputChange}
          value={values.email}
          className="form-field"
          placeholder="Email"
          name="email"
        />
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Contact;
