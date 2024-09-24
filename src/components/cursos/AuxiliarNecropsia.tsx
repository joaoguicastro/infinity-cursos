/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import auxiliarnecropsia from '../../assets/cursos/auxiliarnecropsia.jpg';

const AuxiliarNecropsia: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Auxiliar de Necropsia",
    category: "Saúde Forense",
    salary: "R$ 2.500 - R$ 4.500",
    description: "O curso de Auxiliar de Necropsia capacita os alunos para auxiliar no processo de necropsia, preparar o corpo e os instrumentos necessários, manusear e preservar amostras biológicas, manter registros precisos, organizar e limpar as áreas de trabalho, e seguir normas de biossegurança e segurança no ambiente de trabalho.",
    jobMarket: "O mercado para Auxiliares de Necropsia é especializado e estável, com oportunidades em hospitais, institutos de criminalística e laboratórios forenses. A demanda por profissionais qualificados é impulsionada pela necessidade de análises e investigações de causas de morte, oferecendo boas perspectivas de emprego e crescimento na área forense e de saúde pública.",
    duration: "12 meses",
    certification: "Técnico",
    teachingMode: "Online"
  };

  return (
    <div>
      <Header />
      <div className="course-details-custom">
        {/* Imagem de fundo dinâmica */}
        <div className="course-overview-custom" style={{ backgroundImage: `url(${auxiliarnecropsia})` }}>
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

export default AuxiliarNecropsia;
