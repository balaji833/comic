import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p>&copy; 2025 Comics World</p>
        <div className="social-icons mt-2">
          <a href="https://facebook.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com" className="text-white" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
