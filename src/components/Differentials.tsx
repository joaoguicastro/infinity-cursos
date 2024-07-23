// src/components/Differentials.tsx
import React from 'react';
import './Differentials.css';
import { FaRocket, FaLaptopCode, FaClipboardList, FaBullhorn } from 'react-icons/fa';

const Differentials: React.FC = () => {
  return (
    <section className="differentials">
      <div className="differentials-content">
        <h2>Diferenciais da Empresa</h2>
        <p>É assim que vamos te ajudar!</p>
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Learn More</span>
        </button>
      </div>
      <div className="differentials-examples">
        <div className="card">
          <div className="card2">
            <FaRocket className="differential-icon" />
            <h3>Atendimento Rápido</h3>
            <p>Resolvemos suas dúvidas e problemas de forma ágil e eficiente.</p>
          </div>
        </div>
        <div className="card">
          <div className="card2">
            <FaLaptopCode className="differential-icon" />
            <h3>Desenvolvimento Personalizado</h3>
            <p>Criamos soluções sob medida para atender às suas necessidades específicas.</p>
          </div>
        </div>
        <div className="card">
          <div className="card2">
            <FaClipboardList className="differential-icon" />
            <h3>Consultoria Completa</h3>
            <p>Acompanhamos seu projeto do início ao fim, garantindo o sucesso em cada etapa.</p>
          </div>
        </div>
        <div className="card">
          <div className="card2">
            <FaBullhorn className="differential-icon" />
            <h3>Marketing Eficaz</h3>
            <p>Planejamos e executamos estratégias de marketing que geram resultados.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
