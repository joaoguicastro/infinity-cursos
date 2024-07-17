// src/components/Header.tsx
import React, { useState } from 'react';
import logo from '../assets/Ícone-do-logotipo-normal.png'; // Altere para o caminho correto da sua logo
import './Header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Infinity Cursos" />
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        {menuOpen ? 'Close' : 'Menu'}
      </button>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#courses">Cursos</a></li>
          <li><a href="#about">Sobre nós</a></li>
          <li><a href="#contact">Contato</a></li>
          <li><a href="#student-area">Área do aluno</a></li>
          <li><a href="#join-us">Seja nosso aluno</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
