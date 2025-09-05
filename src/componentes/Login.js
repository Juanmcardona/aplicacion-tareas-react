import React, { useState } from 'react';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const manejarEnvio = e => {
    e.preventDefault();

    // Validación básica de email
    const emailValido = /\S+@\S+\.\S+/.test(email);

    if (!emailValido) {
      setError('Ingresa un email válido');
      return;
    }

    if (!password.trim()) {
      setError('Ingresa una contraseña');
      return;
    }

    // Si pasa ambas validaciones
    onLogin(true);
  }

  return (
    <div className="login-container">
      <h2>Inicia Sesión</h2>
      <form onSubmit={manejarEnvio}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={e => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Ingresar</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  );
}

export default Login;
