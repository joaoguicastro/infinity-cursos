// src/components/JoinSection.tsx
import React from 'react';
import './JoinSection.css';
import logoMini from '../assets/Ícone-do-logotipo-normal.png';

const JoinSection: React.FC = () => {
  return (
    <div className="join-section">
      <div className="join-content">
        <div className="left-content">
          <p className="highlight-text">quer ser um<br /><span className="highlight">#InfinityLover?</span></p>
        </div>
        <div className="center-content">
          <h2>Transformando<br />ideias em realidade</h2>
        </div>
        <div className="right-content">
          <a href="https://w.app/infinitycursos">
            <button className="join-button">
              Matricule-se já
            </button>
          </a>
        </div>
      </div>
      <div className="logos-container">
        {Array.from({ length: 37 }).map((_, idx) => (
          <div className="mini-logo" key={idx}>
            <img src={logoMini} alt="Mini logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinSection;
