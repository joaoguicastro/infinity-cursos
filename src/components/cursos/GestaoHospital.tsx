/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import gestaohospital from '../../assets/cursos/gestaohospitalar.webp';

const GestaoHospital: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Gestão Hospitalar",
    category: "Saúde",
    salary: "R$ 6.000 - R$ 12.000",
    description: "O curso de Gestão Hospitalar capacita os alunos para gerenciar recursos financeiros, humanos e materiais, desenvolver estratégias e planos de ação, coordenar processos administrativos e operacionais, assegurar conformidade com regulamentações e facilitar a comunicação entre departamentos e pacientes.",
    jobMarket: "O mercado para profissionais de Gestão Hospitalar é robusto e em crescimento, com oportunidades em hospitais, clínicas, laboratórios e instituições de saúde. A demanda por serviços de saúde eficientes e de alta qualidade oferece boas perspectivas de emprego e oportunidades de avanço na carreira.",
    duration: "12 meses",
    certification: "Técnico",
    teachingMode: "Online"
  };

  return (
    <div>
      <Header />
      <div className="course-details-custom">
        <div className="course-overview-custom">
          <div className="image-container-custom">
            <img src={gestaohospital} alt="Informática Profissional" className="course-image-custom" />
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

export default GestaoHospital;
