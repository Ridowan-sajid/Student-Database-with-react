import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Layout/Navbar";

export default function RegisterStudent() {
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    name: "",
    course: "",
    status: "",
  });

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/student/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(register),
    })
      .then((res) => {
        console.log("Successfully saved", res);
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
          <label>Course</label>
          <input
            type="text"
            className="form-control"
            name="course"
            value={register.course}
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

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
