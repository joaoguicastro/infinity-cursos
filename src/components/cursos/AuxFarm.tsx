/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import auxiliarfarm from '../../assets/cursos/auxiliarfarmaceutico.webp';

const AuxFarm: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Auxiliar de Farmácia",
    category: "Saúde",
    salary: "R$ 1.800 - R$ 3.500",
    description: "O curso de Auxiliar de Farmácia capacita os alunos para receber e atender prescrições médicas, preparar e dispensar medicamentos, fornecer informações ao cliente sobre o uso de produtos farmacêuticos, gerenciar o estoque, manter a organização e limpeza do ambiente de trabalho e garantir a conformidade com regulamentações de saúde.",
    jobMarket: "O mercado para Auxiliares de Farmácia é estável, com demanda constante em farmácias, drogarias e hospitais. A crescente demanda por medicamentos e produtos farmacêuticos contribui para boas perspectivas de emprego e oportunidades de crescimento na área de saúde.",
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
            <img src={auxiliarfarm} alt="Informática Profissional" className="course-image-custom" />
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

export default AuxFarm;
