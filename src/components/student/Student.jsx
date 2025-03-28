import React, { useState } from 'react';
import './Student.css';
import logo from '../../assets/logo.png';
import classIcon from '../../assets/class-icon.png'; 
import gradesIcon from '../../assets/grades-icon.png';
import Classes from './Classes';
import Grades from './Grades';

const Student = ({ setShowStudent }) => {
  const [currentView, setCurrentView] = useState('dashboard'); 
  
  const handleLogout = () => {
    setShowStudent(false);
  };

  const renderView = () => {
    switch(currentView) {
      case 'classes':
        return <Classes goBack={() => setCurrentView('dashboard')} />;
      case 'grades':
        return <Grades goBack={() => setCurrentView('dashboard')} />;
      default:
        return (
          <>
            <h1 className="main-title">Tu progreso académico</h1>
            <p className="main-description">
              Consulta tus clases y calificaciones al instante. ¡Sigue tu progreso!
            </p>

            <div className="options-grid">
              <div className="option-card" onClick={() => setCurrentView('classes')}>
                <img src={classIcon} alt="Clases" className="option-icon" />
                <h3 className="option-title">Consulta tus clases</h3>
              </div>

              <div className="option-card" onClick={() => setCurrentView('grades')}>
                <img src={gradesIcon} alt="Calificaciones" className="option-icon" />
                <h3 className="option-title">Consulta tus calificaciones</h3>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="student-dashboard">
      <header className="student-header">
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

      <main className="student-main">
        {renderView()}
      </main>
    </div>
  );
};

export default Student;