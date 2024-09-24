// src/components/Footer.tsx
import React from 'react';
import './Footer.css';
import logo from '../assets/Logotipo-vertical-normal.png';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPeopleArrows } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={logo} alt="Infinity Logo" className="footer-logo" />
        </div>
        <div className="footer-section">
          <h3>Contato</h3>
          <p>(85) 9 99115-4215</p>
          <p>Shopping Pitaguary, Subsolo S2 e S3</p>
          <p>Rua Joao de Alencar, 113 – Centro, Maracanau – CE, 61900-150</p>
          <p>redeinfinitycursos@gmail.com</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/infinitycursosofc/" className='link'> <FaInstagram /> </a>
            <a href="https://api.whatsapp.com/send?phone=5585991154215&text=Oi,%20estou%20precisando%20de%20mais%20informaçoes" className='link'><FaWhatsapp /></a>
            <a href="mailto:redeinfinitycursos@gmail.com"><FaEnvelope /> </a>
            <a href="https://api.whatsapp.com/send?phone=5585991154215&text=Oi,%20estou%20precisando%20de%20mais%20informaçoes"><FaPeopleArrows/> </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Escola</h3>
          <p>Início</p>
          <p>Quem somos</p>
          <p>Cursos</p>
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
