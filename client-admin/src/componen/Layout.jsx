import { Outlet } from "react-router-dom";
import Navbor from "./Navbor";
import './style.css'

export default function Layout() {
  return (
    <>
    <div className="sidebar" style={{backgroundColor:"gray"}}>
      <Navbor />
    </div>
    <div className="content">
      <Outlet />
    </div>
    </>
  );
}
