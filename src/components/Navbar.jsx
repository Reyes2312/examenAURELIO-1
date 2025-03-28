import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = ({ setShowLogin }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="CEA Logo" />
        <span>Centro de Estudios Académicos</span>
      </div>
      <div className="nav-links">
        <button className="btn" onClick={() => setShowLogin(true)}>
          Iniciar sesión
        </button>
      </div>
    </nav>
  );
};

export default Navbar;