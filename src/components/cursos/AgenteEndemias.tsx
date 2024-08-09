/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import agenteendemias from '../../assets/cursos/agenteendemias.webp';

const AgenteEndemias: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Agente de Endemias",
    category: "Saúde Pública",
    salary: "R$ 2.500 - R$ 4.000",
    description: "O curso de Agente de Endemias capacita os alunos para identificar e monitorar focos de doenças endêmicas, realizar campanhas de educação sobre prevenção, fazer visitas domiciliares para orientações e inspeções, coletar e analisar dados epidemiológicos, e colaborar com equipes de saúde para implementar estratégias de controle.",
    jobMarket: "O mercado para Agentes de Endemias é estável, com demanda constante devido à necessidade de controle de doenças e promoção de saúde pública. A função é crucial para a saúde comunitária e oferece boas perspectivas de emprego em órgãos de saúde pública e instituições governamentais.",
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
            <img src={agenteendemias} alt="Informática Profissional" className="course-image-custom" />
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

export default AgenteEndemias;
