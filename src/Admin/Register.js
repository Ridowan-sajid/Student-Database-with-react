import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarLogout from "../Layout/NavbarLogout";

export default function Register() {
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    name: "",
    username: "",
    dob: "",
    password: "",
    status: "",
    email: "",
  });

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/admin/signup/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(register),
    })
      .then((response) => response.json())
      .then((data) => {
        setRegister({
          name: "",
          username: "",
          dob: "",
          password: "",
          status: "",
          email: "",
        });
        console.log("Successfully saved", data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <NavbarLogout></NavbarLogout>
      <form action="" className="container my-5" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={register.name}
            onChange={handleChange}
          />
          <br />
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={register.username}
            onChange={handleChange}
          />
          <br />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            className="form-control"
            name="dob"
            value={register.dob}
            onChange={handleChange}
          />
          <br />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={register.password}
            onChange={handleChange}
          />
          <br />
        </div>

        <div className="form-group">
          <label>Status</label>
          <input
            type="text"
            className="form-control"
            name="status"
            value={register.status}
            onChange={handleChange}
          />
          <br />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={register.email}
            onChange={handleChange}
          />
          <br />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
