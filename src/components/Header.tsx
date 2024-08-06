// src/components/Header.tsx
import React, { useState } from 'react';
import logo from '../assets/Ícone-do-logotipo-normal.png';
import './Header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (event: React.MouseEvent, sectionId: string) => {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Infinity Cursos" />
      </div>
      <nav className="nav">
        {menuOpen && (
          <ul>
            <li><a href="#courses" onClick={(e) => scrollToSection(e, 'cursos')}>Cursos</a></li>
            <li><a href="#differentials" onClick={(e) => scrollToSection(e, 'diferencial')}>Sobre Nós</a></li>
            <li><a href="https://wa.me/5591207549">Contato</a></li>
            <li><a href="#student-area">Área do aluno</a></li>
            <li><a href="https://wa.me/5591207549" onClick={(e) => scrollToSection(e, 'formulario')}>Seja nosso aluno</a></li>
          </ul>
        )}
        <button className="menu-button btn" onClick={toggleMenu}>
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
