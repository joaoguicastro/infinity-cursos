/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import defesacivil from '../../assets/cursos/defesacivil.jpeg';

const DefCivil: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Defesa Civil",
    category: "Segurança Pública",
    salary: "R$ 3.000 - R$ 6.000",
    description: "O curso de Defesa Civil capacita os alunos para desenvolver e implementar planos de emergência, avaliar riscos e promover resiliência, coordenar ações de resposta a desastres, promover programas de educação e conscientização, e manter registros e relatórios detalhados.",
    jobMarket: "O mercado para profissionais da Defesa Civil é estável, com demanda contínua em órgãos governamentais, instituições de emergência e ONGs. A necessidade de planejamento e resposta a desastres contribui para boas perspectivas de emprego e oportunidades de crescimento na área de gestão de crises e segurança pública.",
    duration: "12 meses",
    certification: "Técnico",
    teachingMode: "Online"
  };

  return (
    <div>
      <Header />
      <div className="course-details-custom">
        <div className="course-overview-custom" style={{ backgroundImage: `url(${defesacivil})` }}>
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

export default DefCivil;
