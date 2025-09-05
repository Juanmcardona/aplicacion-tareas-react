import React, { useState } from 'react';
import ListaDeTareas from './componentes/ListaDeTareas';
import Login from './componentes/Login';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="aplicacion-tareas">
      {isLoggedIn ? (
        <div className="tareas-lista-principal">
          <h1>Mis Tareas</h1>
          <ListaDeTareas />
        </div>
      ) : (
        <Login onLogin={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
