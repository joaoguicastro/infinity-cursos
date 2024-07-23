// src/components/Header.tsx
import React, { useState } from 'react';
import logo from '../assets/Ícone-do-logotipo-normal.png';
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
      <nav className="nav">
        {menuOpen && (
          <ul>
            <li><a href="#courses">Cursos</a></li>
            <li><a href="#about">Sobre nós</a></li>
            <li><a href="#contact">Contato</a></li>
            <li><a href="#student-area">Área do aluno</a></li>
            <li><a href="#join-us">Seja nosso aluno</a></li>
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
