import React from 'react';
import './Grades.css';

const Grades = ({ goBack }) => {
  return (
    <div className="grades-view">
      <button onClick={goBack} className="back-button">← Volver</button>
      <h1>Tus Calificaciones</h1>
      {/* Aquí va el contenido de las calificaciones */}
    </div>
  );
};

export default Grades;