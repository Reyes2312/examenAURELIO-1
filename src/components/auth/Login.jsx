import React from "react";
import logo from "../../assets/logo.png"; 
import loginImage from "../../assets/login-image.png";
import "./Login.css";

const Login = ({ setShowLogin }) => {
  return (
    <div className="login-container">
      {/* Encabezado modificado con logo y texto */}
      <div className="login-header">
        <div className="header-logo-container">
          <img src={logo} alt="CEA Logo" className="header-logo" />
          <span className="header-text">Centro de Estudios Académicos</span>
        </div>
        <button className="back-button" onClick={() => setShowLogin(false)}>
          Regresar
        </button>
      </div>

      {/* Contenido principal con fondo verde */}
      <div className="login-main">
        {/* Tarjeta blanca dividida en dos partes */}
        <div className="login-card">
          {/* Sección izquierda con imagen */}
          <div className="login-image-section">
            <img 
              src={loginImage} 
              alt="Estudiante" 
              className="login-illustration"
            />
          </div>

          {/* Sección derecha con formulario */}
          <div className="login-form-section">
            <div className="welcome-section">
              <h2>¡Bienvenido al Sistema Académico!</h2>
              <p>Juntos construyendo el futuro de la educación.</p>
            </div>

            <form className="login-form">
              <div className="form-group">
                <label>Matrícula</label>
                <input 
                  type="text" 
                  placeholder="Ingresa tu matrícula" 
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Contraseña</label>
                <input 
                  type="password" 
                  placeholder="Ingresa tu contraseña" 
                  className="form-input"
                />
              </div>

              <button type="submit" className="login-button">
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;