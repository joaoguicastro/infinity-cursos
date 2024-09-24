/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import guardamunicipal from '../../assets/cursos/guardamunicipal.jpg';

const GuardaMuni: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Guarda Municipal",
    category: "Segurança Pública",
    salary: "R$ 3.000 - R$ 7.000",
    description: "O curso de Guarda Municipal capacita os alunos para realizar patrulhamento e monitoramento urbano, fiscalizar leis e regulamentos locais, oferecer apoio comunitário, responder a emergências e elaborar relatórios sobre incidentes e atividades.",
    jobMarket: "O mercado para Guardas Municipais é estável, com demanda contínua por segurança e ordem pública em municípios e cidades. Existem oportunidades em diversas localidades e instituições municipais, oferecendo boas perspectivas de emprego e estabilidade na área de segurança pública.",
    duration: "12 meses",
    certification: "Técnico",
    teachingMode: "Online"
  };

  return (
    <div>
      <Header />
      <div className="course-details-custom">
        <div className="course-overview-custom" style={{ backgroundImage: `url(${guardamunicipal})` }}>
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

export default GuardaMuni;
