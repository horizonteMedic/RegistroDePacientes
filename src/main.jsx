// App.jsx
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Formulario from './views/registrosuaurioshm/Formulario.jsx';
import Footer from './Components/Footer.jsx';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleFormulario = () => {
    setIsLoggedIn(true);
  };

  return (
    <React.StrictMode>
      {!isLoggedIn && <Formulario onFormulario={handleFormulario} />}
      {isLoggedIn && <Footer />} 
    </React.StrictMode>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("No se encontró el elemento con id 'root'");
}
