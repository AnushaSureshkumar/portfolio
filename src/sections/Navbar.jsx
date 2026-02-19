import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="nav-pill">
      <a href="#home"><FaHome /></a>
      <a href="#skills"><FaCode /></a>
      <a href="#projects"><FaProjectDiagram /></a>
      <a href="#contact"><FaEnvelope /></a>
    </div>
  );
}
 
