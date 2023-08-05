import { Link, NavLink, useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="">3M3NIT</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a onClick={() => navigate("/")} className="nav-link active" aria-current="page" href="">Home</a>
              <a onClick={() => navigate("/formAdd")} className="nav-link" href=""></a>
              <a onClick={() => navigate("/addCategory")} className="nav-link" href=""></a>
            </div>
            <div className="nav-link ms-auto d-flex">
            <a className="nav-link" href="" onClick={() => navigate("/Register")}>Register</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}