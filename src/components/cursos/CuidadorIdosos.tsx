/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import cuidadordeidosos from '../../assets/cursos/cuidadordeidosos.png';

const CuidadorIdosos: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Cuidador de Idosos",
    category: "Saúde",
    salary: "R$ 2.500 - R$ 4.500",
    description: "O curso de Cuidador de Idosos capacita os alunos para auxiliar os idosos nas atividades diárias, monitorar a saúde e bem-estar, oferecer apoio emocional, garantir um ambiente seguro e confortável, e colaborar com familiares e profissionais de saúde na elaboração de planos de cuidados.",
    jobMarket: "O mercado para Cuidadores de Idosos é crescente, com demanda crescente devido ao aumento da população idosa. As oportunidades existem em lares de idosos, serviços domiciliares e hospitais, oferecendo boas perspectivas de emprego e oportunidades de crescimento na área de cuidados com a terceira idade.",
    duration: "12 meses",
    certification: "Técnico",
    teachingMode: "Online"
  };

  return (
    <div>
      <Header />
      <div className="course-details-custom">
        <div className="course-overview-custom" style={{ backgroundImage: `url(${cuidadordeidosos})` }}>
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

export default CuidadorIdosos;
