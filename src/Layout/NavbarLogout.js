import { Link } from "react-router-dom";

export default function NavbarLogout() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark p-3 rounded mb-3">
        <Link className="nav-item btn btn-primary" to={`/`}>
          Login
        </Link>
        <Link className="nav-item btn btn-primary mx-3" to={`/register`}>
          Register
        </Link>

        <Link className="nav-item btn btn-primary mx-3" to={`/sentmail`}>
          Reset Password
        </Link>
      </nav>
    </div>
  );
}
