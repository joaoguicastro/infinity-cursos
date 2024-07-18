// src/components/Hero.tsx
import React from 'react';
import './Hero.css';
import logo from '../assets/Logotipo-vertical-normal.png';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-logo">
          <img src={logo} alt="Infinity Cursos" />
        </div>
        <button className="hero-button">Saiba mais</button>
      </div>
    </section>
  );
};

export default Hero;
