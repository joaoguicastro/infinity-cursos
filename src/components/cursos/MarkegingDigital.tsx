import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import marketingdigital from '../../assets/cursos/marketingdigital.jpg';

const MarketingDigital: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Marketing Digital",
    category: "Negócios",
    salary: "R$ 5.000 - R$ 10.000",
    description: "O curso de Marketing Digital capacita os alunos para planejar, criar e gerenciar campanhas de marketing digital em diversos canais. Os alunos aprendem a implementar estratégias de SEO e SEM, analisar métricas de desempenho, criar e gerenciar conteúdo para redes sociais, e desenvolver estratégias de marca para fortalecer a presença digital.",
    jobMarket: "O mercado para profissionais de Marketing Digital está em expansão, com alta demanda por especialistas em SEO, SEM, análise de dados e gerenciamento de redes sociais. A importância crescente da presença online e a evolução das plataformas digitais oferecem boas perspectivas de emprego e oportunidades de crescimento.",
    duration: "6 meses",
    certification: "Técnico",
    teachingMode: "Presencial"
  };

  return (
    <div>
      <Header />
      <div className="course-details-custom">
        <div className="course-overview-custom" style={{ backgroundImage: `url(${marketingdigital})` }}>
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

export default MarketingDigital;
