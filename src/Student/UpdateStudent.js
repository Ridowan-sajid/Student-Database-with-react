import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../lib/useFetch";
import Navbar from "../Layout/Navbar";

export default function UpdateStudent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, error, loading } = useFetch(
    `http://localhost:3000/student/${id}`
  );

  const [register, setRegister] = useState({
    name: "",
    course: "",
    status: "",
  });

  useEffect(() => {
    if (data) {
      setRegister({
        name: data.name,
        course: data.course,
        status: data.status,
      });
    }
  }, [data]);

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/student/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(register),
    })
      .then(() => {
        console.log(register);
        setRegister({
          name: register.name,
          course: register.course,
          status: register.status,
        });
        console.log("Successfully saved", data);
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
      {error && <h1>{error}</h1>}
      {loading && <h1>Loading...</h1>}
    </div>
  );
}
