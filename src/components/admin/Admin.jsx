import React from 'react';
import './Admin.css';
import AdminImage1 from '../../assets/Adminimagen1.png';
import AdminImage2 from '../../assets/Adminimagen2.png';
import Logo from '../../assets/logo.png';

const Admin = ({ onLogout }) => {
  return (
    <div className="admin-wrapper">
      {/* Navbar superior */}
      <nav className="admin-navbar">
        <div className="navbar-left">
          <img src={Logo} alt="Logo" className="navbar-logo" />
        </div>
        <div className="navbar-right">
          <span className="navbar-link">Ajustes</span>
          <span className="navbar-link" onClick={onLogout}>Cerrar sesión</span>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="admin-main-content">
        <h1 className="admin-title">Centro de control</h1>
        <p className="admin-description">
          Gestiona y configura todo lo necesario para un funcionamiento óptimo.
        </p>
        
        <div className="admin-menu">
          <div className="menu-item">
            <div className="menu-icon-container">
              <img src={AdminImage1} alt="Docente" className="menu-icon" />
            </div>
            <span className="menu-text">Agregar o modificar docente</span>
          </div>
          <div className="menu-item">
            <div className="menu-icon-container">
              <img src={AdminImage1} alt="Estudiante" className="menu-icon" />
            </div>
            <span className="menu-text">Agregar o modificar estudiante</span>
          </div>
          <div className="menu-item">
            <div className="menu-icon-container">
              <img src={AdminImage2} alt="Grupo" className="menu-icon" />
            </div>
            <span className="menu-text">Crear o modificar grupo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;