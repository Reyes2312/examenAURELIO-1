import React from "react";
import logo from "../assets/logo.png"; // Asegúrate de que la ruta sea correcta
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="CEA Logo" />
        <span>Centro de Estudios Académicos</span>
      </div>
      <div className="nav-links">
        <button className="btn">Alumnos</button>
        <button className="btn">Docentes</button>
      </div>
    </nav>
  );
};

export default Navbar;
