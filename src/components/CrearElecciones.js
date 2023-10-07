import React, { useState } from 'react';
import './MenuVertical.css';

const CrearElecciones = () => {
  const [motivo, setMotivo] = useState('');
  const [motivoPersonalizado, setMotivoPersonalizado] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [fechaElecciones, setFechaElecciones] = useState('');

  const handleMotivoChange = (e) => {
    const selectedMotivo = e.target.value;
    if (selectedMotivo === 'Otro') {
      // Si se selecciona "Otro", mostramos un campo de texto para ingresar el motivo personalizado
      setMotivoPersonalizado('');
    }
    setMotivo(selectedMotivo);
  };

  const handleMotivoPersonalizadoChange = (e) => {
    setMotivoPersonalizado(e.target.value);
  };

  const handleGuardarClick = () => {
    const motivoFinal = motivo === 'Otro' ? motivoPersonalizado : motivo;
    alert(`El proceso electoral se inició de forma correcta con motivo: ${motivoFinal}`);
  };

  return (
    <div className="crear-elecciones">
      <h3>Nuevo proceso electoral</h3>
      <div className="form-group">
        <label>Motivo:</label>
        <select
          value={motivo}
          onChange={handleMotivoChange}
          className="motivo-input"
        >
          <option value="">Seleccione una opción</option>
          <option value="Rector">Rector, Vicerrector</option>
          <option value="Decano">Decano, Director Académico</option>
          <option value="Director de carrera">Director de carrera</option>
          <option value="Consejo de Facultad">Consejeros de Facultad</option>
          <option value="Consejo de carrera">Consejeros de carrera</option>
          <option value="Otro">Otro</option>
        </select>
        {motivo === 'Otro' && (
          <input
            type="text"
            value={motivoPersonalizado}
            onChange={handleMotivoPersonalizadoChange}
            placeholder="Ingrese otro motivo"
            className="motivo-input"
          />
        )}
      </div>
      <div className="form-group">
        <label>Fecha inicio de convocatoria:</label>
        <input
          type="date"
          value={fechaInicio}
          onChange={(e) => setFechaInicio(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Fecha fin de convocatoria:</label>
        <input
          type="date"
          value={fechaFin}
          min={fechaInicio}
          onChange={(e) => setFechaFin(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Fecha de las elecciones:</label>
        <input
          type="date"
          value={fechaElecciones}
          min={fechaFin}
          onChange={(e) => setFechaElecciones(e.target.value)}
        />
      </div>
      <button className="volver-button">Volver</button>
      <button className="guardar-button" onClick={handleGuardarClick}>
        Guardar
      </button>
    </div>
  );
};

export default CrearElecciones;
