import Login from "./Admin/Login";
import Register from "./Admin/Register";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AllStudent from "./Student/AllStudent";
import SingleStudent from "./Student/SingleStudent";
import UpdateStudent from "./Student/UpdateStudent";
import RegisterStudent from "./Student/RegisterStudent";
import ChangePassword from "./Admin/ChangePassword";
import SentMail from "./Admin/SentMail";
import ResetPassword from "./Admin/ResetPasswor";
import Logout from "./Admin/Logout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route exact path="/" element={<Login />} />

          <Route exact path="/changepassword" element={<ChangePassword />} />

          <Route exact path="/register" element={<Register />} />

          <Route exact path="/sentmail" element={<SentMail />} />

          <Route exact path="/resetpassword" element={<ResetPassword />} />

          <Route exact path="/student" element={<AllStudent />} />

          <Route exact path="/student/:id" element={<SingleStudent />} />

          <Route exact path="/update/student/:id" element={<UpdateStudent />} />

          <Route exact path="/student/register" element={<RegisterStudent />} />

          <Route exact path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
