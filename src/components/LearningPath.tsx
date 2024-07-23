// src/components/LearningPath.tsx
import React from 'react';
import './LearningPath.css';
import learningImage from '../assets/two-people-working-at-an-office.png';

const LearningPath: React.FC = () => {
  return (
    <section className="learning-path">
      <img src={learningImage} alt="Learning Path" />
      <div className="learning-steps">
        <h2>Trilha de Aprendizado</h2>
        <ol>
          <li>Escolher o curso</li>
          <li>Fazer a matrícula do curso desejado</li>
          <li>Estudar e se dedicar ao curso</li>
        </ol>
      </div>
    </section>
  );
};

export default LearningPath;
