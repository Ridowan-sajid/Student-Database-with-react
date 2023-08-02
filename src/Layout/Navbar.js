import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark p-3 rounded mb-3">
        <Link className="nav-item btn btn-primary" to={`/changepassword`}>
          Changed Password
        </Link>

        <Link className="nav-item btn btn-primary mx-3" to={`/student`}>
          All Student
        </Link>

        <Link
          className="nav-item btn btn-primary mx-3"
          to={`/student/register`}
        >
          Student Register
        </Link>

        <Link className="nav-item btn btn-primary mx-3" to={`/logout`}>
          Logout
        </Link>
      </nav>
    </div>
  );
}
