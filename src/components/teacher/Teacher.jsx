import React, { useState } from "react";
import "./Teacher.css";
import logo from "../../assets/logo.png";
import classIcon from "../../assets/class-icon.png"; 
import gradesIcon from "../../assets/grades-icon.png";


const Teacher = ({ setShowTeacher }) => {
  const [currentView, setCurrentView] = useState("dashboard"); 

  const handleLogout = () => {
    setShowTeacher(false);
  };

  const renderView = () => {
    switch (currentView) {
      case "classes":
        return <Classes goBack={() => setCurrentView("dashboard")} />;
      case "grades":
        return <Grades goBack={() => setCurrentView("dashboard")} />;
      default:
        return (
          <>
            <h1 className="main-title">Panel Docente</h1>
            <p className="main-description">
              Consulta tus grupos, alumnos y asigna calificaciones fácilmente. ¡Haz seguimiento a tu clase!
            </p>

            <div className="options-grid">
              <div className="option-card" onClick={() => setCurrentView("classes")}>
                <img src={classIcon} alt="Grupos" className="option-icon" />
                <h3 className="option-title">Consulta tus grupos y alumnos</h3>
              </div>

              <div className="option-card" onClick={() => setCurrentView("grades")}>
                <img src={gradesIcon} alt="Calificaciones" className="option-icon" />
                <h3 className="option-title">Asignar calificaciones</h3>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="teacher-dashboard">
      <header className="teacher-header">
        <div className="header-left">
          <img src={logo} alt="CEA Logo" className="logo-img" />
          <div className="header-titles">
            <span className="header-title-main">Centro de Estudios Académicos</span>
          </div>
        </div>
        <div className="header-right">
          <button className="text-btn">Ajustes</button>
          <button className="text-btn" onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </header>

      <main className="teacher-main">{renderView()}</main>
    </div>
  );
};

export default Teacher;