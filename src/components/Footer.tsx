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
          <p>(82) 9 9944-6949</p>
          <p>Empresarial Terra Brasilis, sala 701</p>
          <p>Av. da Paz, 1864 – Centro, Maceió – AL, 57020-470</p>
          <p>contato@agenciamako.com</p>
          <div className="social-icons">
            <FaInstagram />
            <FaWhatsapp />
            <FaEnvelope />
          </div>
        </div>
        <div className="footer-section">
          <h3>Agência</h3>
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
