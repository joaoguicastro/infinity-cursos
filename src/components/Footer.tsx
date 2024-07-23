// src/components/Footer.tsx
import React from 'react';
import './Footer.css';
import logo from '../assets/Logotipo-vertical-normal.png';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={logo} alt="Infinity Logo" className="footer-logo" />
        </div>
        <div className="footer-section">
          <h3>Contato</h3>
          <p>(82) 9 9120-7549</p>
          <p>Shopping Pitaguary, Subsolo S2 e S3</p>
          <p>Rua Joao de Alencar, 113 – Centro, Maracanau – CE, 61901-085</p>
          <p>redeinfinitycursos@gmail.com</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/infinitycursosofc/" className='link'> <FaInstagram /> </a>
            <a href="https://wa.me/5591207549" className='link'><FaWhatsapp /></a>
            <FaEnvelope />
          </div>
        </div>
        <div className="footer-section">
          <h3>Escola</h3>
          <p>Início</p>
          <p>Quem somos</p>
          <p>Serviços</p>
          <p>Cases</p>
          <p>Fale conosco</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Infinity Cursos Profissionalizantes | Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
