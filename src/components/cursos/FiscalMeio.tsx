/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import fiscalmeio from '../../assets/cursos/ficaldomeioambiente.webp';

const FiscalMeio: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Fiscal do Meio Ambiente",
    category: "Meio Ambiente",
    salary: "R$ 4.000 - R$ 8.000",
    description: "O curso de Fiscal do Meio Ambiente capacita os alunos para realizar inspeções e auditorias ambientais, elaborar relatórios, oferecer orientação sobre práticas sustentáveis, gerenciar processos administrativos e responder a denúncias de infrações ambientais.",
    jobMarket: "O mercado para Fiscais do Meio Ambiente é promissor e crescente, com oportunidades em órgãos governamentais, empresas privadas e ONGs. A crescente preocupação com a preservação ambiental e regulamentações oferece boas perspectivas de emprego e oportunidades de crescimento na área de gestão ambiental.",
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
            <img src={fiscalmeio} alt="Informática Profissional" className="course-image-custom" />
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

export default FiscalMeio;
