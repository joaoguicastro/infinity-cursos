/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import auxiliarvet from '../../assets/cursos/auxiliarvet.webp';

const AuxVet: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Auxiliar Veterinário",
    category: "Saúde Animal",
    salary: "R$ 2.000 - R$ 4.000",
    description: "O curso de Auxiliar Veterinário capacita os alunos para auxiliar o veterinário durante consultas e procedimentos clínicos, realizar cuidados básicos com os animais, manter a limpeza e organização do ambiente e equipamentos, atender aos tutores de animais e manter registros precisos dos atendimentos e tratamentos.",
    jobMarket: "O mercado para Auxiliares Veterinários é estável e em crescimento, com demanda crescente devido ao aumento da preocupação com a saúde animal e o número de animais de estimação. Profissionais podem encontrar oportunidades em clínicas veterinárias, hospitais de animais e instituições de pesquisa.",
    duration: "8 meses",
    certification: "Técnico",
    teachingMode: "Online"
  };

  return (
    <div>
      <Header />
      <div className="course-details-custom">
        <div className="course-overview-custom">
          <div className="image-container-custom">
            <img src={auxiliarvet} alt="Informática Profissional" className="course-image-custom" />
          </div>
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

export default AuxVet;
