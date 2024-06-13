import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import logo from "../../assets/logoramcoperu.jpeg";

const Login = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1000); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs">
        <img 
          src={logo} 
          alt="Logo RamcoPeru" 
          className="mx-auto mb-2 logo"
          style={{ maxWidth: '150px' }} 
        />
        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-8">
            <label className="block mb-2 font-bold text-sm" htmlFor="username">Usuario</label>
            <input 
              className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm" 
              type="text" 
              id="username" 
              placeholder="Usuario" 
            />
          </div>
          <div className="mb-4 relative">
            <label className="block font-bold text-sm mb-2" htmlFor="password">Contraseña</label>
            <div className="relative">
              <input 
                className="w-full px-2 py-1 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm" 
                type={showPassword ? 'text' : 'password'} 
                id="password" 
                placeholder="Ingrese contraseña" 
              />
              <button 
                type="button" 
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500" 
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>
          <button 
            type="submit"
            disabled={isLoading} 
            style={{ 
              backgroundColor: '#c71b08',
              color: 'white',
              padding: '0.4rem 2rem',
              borderRadius:'1em',
              display: 'block', 
              margin: '0 auto',
              marginTop: '2em',
              fontSize: '13px',
              fontWeight:'bold'
            }}
          >
            {isLoading ? 'Cargando...' : 'Ingresar'}
          </button>

          <div className="mt-4 text-center">
            <a 
            style={{
              color: '#c79e3e',
              fontWeight:'bold',
              fontSize: '12px',
              letterSpacing: '1px'

            }}
            className="text-blue-500 hover:underline text-sm" href="#">¿Olvidaste tu contraseña?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
