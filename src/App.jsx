import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/auth/Login";
import Student from "./components/student/Student"; 
import Admin from "./components/admin/Admin"
import Teacher from "./components/teacher/Teacher";



import "./styles.css";
import brain from "./assets/brain.png";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="app-container">
      {!showLogin && <Navbar setShowLogin={setShowLogin} />}
      
      {showLogin ? (
        <Login setShowLogin={setShowLogin} />
      ) : (
        <header className="hero">
          <div className="hero-content">
            <h1>
              La educación se mide en esfuerzo y resultados. Accede a tus calificaciones rápido, ¡cada nota cuenta!
            </h1>
            <p>Tu esfuerzo, tus calificaciones, tu futuro.</p>
          </div>
          <img src={brain} alt="Cerebro estudiante" className="brain-img" />
        </header>
      )}
    </div>
  );
};

export default App;