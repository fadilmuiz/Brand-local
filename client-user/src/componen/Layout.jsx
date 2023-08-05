import { Outlet } from "react-router-dom";
// import Navbor from "./Navbor";
import Navbar from "./Navbar"
// import './style.css'

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
