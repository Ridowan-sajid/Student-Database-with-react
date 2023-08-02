import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../lib/useFetch";
import { useNavigate } from "react-router-dom";
import Navbar from "../Layout/Navbar";

export default function SingleStudent() {
  const navigate = useNavigate();

  const { id } = useParams();
  const { data, error, loading } = useFetch(
    "http://localhost:3000/student/" + id
  );
  console.log(data);

  const handleClick = (id) => {
    console.log(id);

    fetch(`http://localhost:3000/student/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error("Failed to delete the student.");
        }
        console.log("Student deleted successfully.");
        navigate("/student");
      })
      .catch((error) => {
        console.error("Error deleting student:", error.message);
      });
  };

  return (
    <div className="container">
      <Navbar></Navbar>
      {data && (
        <div key={data._id}>
          <h4>Name: {data.name}</h4>
          <p>Course: {data.course}</p>
          <p>Status: {data.status}</p>
          <p>Date: {data.date}</p>
          <p>
            {data.admin ? "Created By: " + data.admin.name : "Created By: Null"}
          </p>
          <Link to={`/update/student/${data._id}`}>
            <button className="btn btn-outline-primary">Update</button>
          </Link>

          <button
            className="btn btn-outline-danger mx-3"
            type="submit"
            onClick={() => handleClick(data._id)}
          >
            Delete
          </button>
          <br />
          <br />
        </div>
      )}
      {error && <h1>{error}</h1>}
      {loading && <h1>Loading...</h1>}
    </div>
  );
}
