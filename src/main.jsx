// App.jsx
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Login from './views/Login/Login.jsx';
import PanelPrincipal from './views/PanelPrincipal/Panelprincipal.jsx';
import Footer from './Components/Footer.jsx';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <React.StrictMode>
      {!isLoggedIn && <Login onLogin={handleLogin} />}
      {isLoggedIn && <PanelPrincipal isLoggedIn={isLoggedIn} />} 
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
