import React, { useState } from 'react';
import './MenuVertical.css';
import Logo from './logo.png';
import CrearElecciones from './CrearElecciones'; 

const MenuVertical = () => {
  const [mostrarCrearEleccion, setMostrarCrearEleccion] = useState(false);

  const handleCrearEleccionClick = () => {
    setMostrarCrearEleccion(true);
  };
/*
  return (
    <div className="menu-vertical">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h1>Administrador de Elecciones</h1>
        <h2>FCyT</h2>
      </div>
      <div className="menu-buttons">
        <button className="menu-button" onClick={handleCrearEleccionClick}>
          Crear Elección
        </button>
        <button className="menu-button">Ver Elecciones Activas</button>
      </div>
      {mostrarCrearEleccion && <CrearElecciones />} {/* Mostrar CrearElecciones si mostrarCrearEleccion es true/}
    </div>
  );
};

export default MenuVertical;*/


return (
  <div className="menu-container">
    <div className="menu-vertical">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h1>Administrador de Elecciones</h1>
        <h2>FCyT</h2>
      </div>
      <div className="menu-buttons">
        <button className="menu-button" onClick={handleCrearEleccionClick}>
          Crear Elección
        </button>
        <button className="menu-button">Ver Elecciones Activas</button>
      </div>
    </div>
    <div className="menu-content">
      {mostrarCrearEleccion && <CrearElecciones />}
    </div>
  </div>
);
};

export default MenuVertical;