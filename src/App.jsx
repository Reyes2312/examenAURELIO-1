import React from "react";
import Navbar from "./components/Navbar";
import "./styles.css";
import brain from "./assets/brain.png"; // Imagen del cerebro

const App = () => {
  return (
    <div>
      <Navbar />
      <header className="hero">
        <div className="hero-content">
          <h1>
            La educación se mide en esfuerzo y resultados. Accede a tus calificaciones rápido, ¡cada nota cuenta!
          </h1>
          <p>Tu esfuerzo, tus calificaciones, tu futuro.</p>
        </div>
        <img src={brain} alt="Cerebro estudiante" className="brain-img" />
      </header>
    </div>
  );
};

export default App;

