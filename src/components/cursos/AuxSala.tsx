/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import auxiliarsala from '../../assets/cursos/auxiliarsala.jpg';

const AuxSala: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Auxiliar de Sala",
    category: "Educação",
    salary: "R$ 1.800 - R$ 3.000",
    description: "O curso de Auxiliar de Sala capacita os alunos para apoiar o professor na gestão da sala de aula, oferecer suporte aos alunos, organizar e distribuir materiais didáticos, auxiliar em tarefas administrativas e promover um ambiente de aprendizado positivo e inclusivo.",
    jobMarket: "O mercado para Auxiliares de Sala é estável, com demanda em escolas públicas e privadas, creches e instituições de ensino. A função é essencial para apoiar o trabalho dos professores e garantir um ambiente de aprendizagem eficaz, oferecendo boas perspectivas de emprego e oportunidades de crescimento na área educacional.",
    duration: "12 meses",
    certification: "Técnico",
    teachingMode: "Online"
  };

  return (
    <div>
      <Header />
      <div className="course-details-custom">
        {/* Imagem de fundo dinâmica */}
        <div className="course-overview-custom" style={{ backgroundImage: `url(${auxiliarsala})` }}>
          <div className="card-custom">
            <div className="tools-custom">
              <div className="circle-custom">
                <span className="red-custom box-custom"></span>
              </div>
              <div className="circle-custom">
                <span className="yellow-custom box-custom"></span>
              </div>
              <div className="circle-custom">
                <span className="green-custom box-custom"></span>
              </div>
            </div>
            <div className="card-content-custom">
              <h1>{courseInfo.title}</h1>
              <span className="category-custom">{courseInfo.category}</span>
              <span className="salary-custom">Média salarial nacional {courseInfo.salary}</span>
            </div>
          </div>
        </div>
        <section className="course-description-custom">
          <h2>Sobre o curso</h2>
          <p>{courseInfo.description}</p>
        </section>
        <section className="course-job-market-custom">
          <h2>Mercado de trabalho</h2>
          <p>{courseInfo.jobMarket}</p>
        </section>
        <section className="course-details-info-custom">
          <div className="detail-custom">
            <span>Duração</span>
            <p>{courseInfo.duration}</p>
          </div>
          <div className="detail-custom">
            <span>Certificação conferida</span>
            <p>{courseInfo.certification}</p>
          </div>
          <div className="detail-custom">
            <span>Modelo de Ensino</span>
            <p>{courseInfo.teachingMode}</p>
          </div>
        </section>
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default AuxSala;
