import React from 'react';
import './Differentials.css';
import { FaRocket, FaLaptopCode, FaClipboardList, FaBullhorn } from 'react-icons/fa';
import SubscribeButton from './SubscribeButton';

const CustomDifferentials: React.FC = () => {
  return (
    <section className="custom-differentials" id='custom-diferencial'>
      <div className="custom-differentials-content">
        <h2>Diferenciais da Empresa</h2>
        <p>É assim que vamos te ajudar!</p>
        <SubscribeButton />
      </div>
      <div className="custom-differentials-examples">
        <div className="custom-card">
          <div className="custom-card2">
            <FaRocket className="custom-differential-icon" />
            <h3>Qualidade do Conteúdo</h3>
            <p>Oferecemos material didático atualizado e de alta qualidade, desenvolvido por especialistas para garantir um aprendizado eficaz.</p>
          </div>
        </div>
        <div className="custom-card">
          <div className="custom-card2">
            <FaLaptopCode className="custom-differential-icon" />
            <h3>Experiência do Aluno</h3>
            <p>Proporcionamos uma jornada de aprendizado envolvente e um suporte dedicado para garantir a sua satisfação e sucesso.</p>
          </div>
        </div>
        <div className="custom-card">
          <div className="custom-card2">
            <FaClipboardList className="custom-differential-icon" />
            <h3>Inovação e Tecnologia</h3>
            <p>Utilizamos tecnologias modernas e métodos inovadores para tornar o aprendizado dinâmico e adaptado às tendências atuais.</p>
          </div>
        </div>
        <div className="custom-card">
          <div className="custom-card2">
            <FaBullhorn className="custom-differential-icon" />
            <h3>Credibilidade e Reputação</h3>
            <p>Mantemos uma reputação sólida com cursos certificados e um histórico comprovado de resultados positivos.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomDifferentials;
