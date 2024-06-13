import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-2 fixed bottom-0 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex justify-center items-center space-x-1 md:space-x-4 md:flex-row">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="text-base md:text-lg" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-base md:text-lg" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-base md:text-lg" />
          </a>
        </div>
        <div className="my-2 md:my-0"></div>
        <div className="text-sm">© RamcoPeru 2024 - Todos los derechos reservados</div>
        <div className="my-2 md:my-0"></div>
        <div className="text-xs">Desarrollado por PRODITEL</div>
      </div>
    </footer>
  );
};

export default Footer;
