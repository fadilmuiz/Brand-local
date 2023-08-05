import { Link, NavLink, useNavigate } from "react-router-dom";


export default function Navbor() {
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div className="container-fluid">
        <a className="navbar-brand" href="" style={{fontSize:"40px", fontFamily:"fantasy"}}>3 M 3 N I T</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a onClick={() => navigate("/")} className="nav-link" href="">Dashboard</a>
          </li>
          <li className="nav-item">
            <a onClick={() => navigate("/category")} className="nav-link" href="">Category</a>
          </li>
          <li className="nav-item">
            <a onClick={() => navigate("/Register")} className="nav-link" href="#">Register</a>
          </li>
          <li className="nav-item">
            <a onClick={logout} className="nav-link" href="">Log Out</a>
          </li>
        </ul>
      </div>
    </>
  )
}