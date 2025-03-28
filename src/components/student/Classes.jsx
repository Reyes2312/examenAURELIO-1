import React from 'react';
import './Classes.css';

const Classes = ({ goBack }) => {
  return (
    <div className="classes-view">
      <h1 className="classes-title">HOLA ESTUDIANTE!</h1>
      
      <div className="schedule-plain">
        <div className="schedule-item">
          <div>17:00-17:50</div>
          <div>ESPAÑOL</div>
          <div>JAVIER</div>
        </div>
        
        <div className="schedule-item">
          <div>17:50-18:40</div>
          <div>INGLES</div>
          <div>MELISSA</div>
        </div>
        
        <div className="schedule-item">
          <div>18:40-19:30</div>
          <div>MATEMATICAS</div>
          <div>JULIA HERRERA</div>
        </div>
      </div>
      
      <button onClick={goBack} className="back-button">← Volver</button>
    </div>
  );
};

export default Classes;