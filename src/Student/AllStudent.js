import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../lib/useFetch";
import Navbar from "../Layout/Navbar";

export default function AllStudent() {
  const { data, error, loading } = useFetch("http://localhost:3000/student/");
  console.log(data);
  return (
    <div className="container">
      <Navbar></Navbar>
      {data &&
        data.map((b) => (
          <div key={b._id}>
            <h4>Name: {b.name}</h4>
            <p>Course: {b.course}</p>
            <p>Status: {b.status}</p>
            <p>Date: {b.date}</p>
            <Link to={`/student/${b._id}`}>
              <button className="btn btn-outline-primary">Details</button>
            </Link>
            <br />
            <br />
          </div>
        ))}
      {error && <h1>{error}</h1>}
      {loading && <h1>Loading...</h1>}
    </div>
  );
}
