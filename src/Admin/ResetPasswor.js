import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarLogout from "../Layout/NavbarLogout";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    otp: "",
    password: "",
  });

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/admin/resetpassword/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(register),
    })
      .then((response) => response.json())
      .then((data) => {
        setRegister({
          otp: "",
          password: "",
        });
        console.log("Successfully Changed", data);
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
          <label>Otp</label>
          <input
            type="text"
            className="form-control"
            name="otp"
            value={register.otp}
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

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
