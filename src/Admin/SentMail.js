import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarLogout from "../Layout/NavbarLogout";

export default function SentMail() {
  const navigate = useNavigate();

  const [register, setRegister] = useState({
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
    fetch("http://localhost:3000/admin/sentmail/", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(register),
    })
      .then((response) => response.json())
      .then((data) => {
        setRegister({
          email: "",
        });
        console.log("Successfully Sent", data);
        navigate("/resetpassword");
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
