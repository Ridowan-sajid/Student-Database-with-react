import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarLogout from "../Layout/NavbarLogout";

export default function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/admin/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
    })
      .then((response) => response.json())
      .then((data) => {
        setLogin({
          username: "",
          password: "",
        });
        localStorage.setItem("token", data.token);
        const token = localStorage.getItem("token");
        console.log(token);
        navigate("/student");
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
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={login.username}
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
            value={login.password}
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
