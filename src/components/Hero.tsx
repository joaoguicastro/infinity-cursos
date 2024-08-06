// src/components/Hero.tsx
import React from 'react';
import './Hero.css';
import logo from '../assets/Logotipo-vertical-normal.png';

const Hero: React.FC = () => {
  const scrollToSection = (event: React.MouseEvent, sectionId: string) => {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-logo">
          <img src={logo} alt="Infinity Cursos" />
        </div>
        <a href="#differentials" onClick={(e) => scrollToSection(e, 'diferencial')}><button className="hero-button">Saiba mais</button></a>
      </div>
    </section>
  );
};

export default Hero;
