import React, { useState } from 'react';
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario({ onSubmit }) {
  const [input, setInput] = useState('');

  const manejarCambio = e => setInput(e.target.value);

  const manejarEnvio = e => {
    e.preventDefault();
    if (!input.trim()) return;

    const tareaNueva = {
      id: uuidv4(),
      texto: input.trim(),
      completada: false
    }

    onSubmit(tareaNueva);
    setInput(''); // limpiar el input después de agregar
  }

  return (
    <form className='tarea-formulario' onSubmit={manejarEnvio}>
      <input 
        className='tarea-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
        value={input}
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>Agregar Tarea</button>
    </form>
  );
}

export default TareaFormulario;
