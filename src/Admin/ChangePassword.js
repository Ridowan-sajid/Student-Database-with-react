import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Layout/Navbar";

export default function ChangePassword() {
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/admin/changePassword/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(register),
    })
      .then((response) => response.json())
      .then((data) => {
        setRegister({
          oldPassword: "",
          newPassword: "",
        });
        console.log("Successfully Changed", data);
        navigate("/student");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <Navbar></Navbar>
      <form action="" className="container my-5" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Old Password</label>
          <input
            type="password"
            className="form-control"
            name="oldPassword"
            value={register.oldPassword}
            onChange={handleChange}
          />
          <br />
        </div>

        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            className="form-control"
            name="newPassword"
            value={register.newPassword}
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
