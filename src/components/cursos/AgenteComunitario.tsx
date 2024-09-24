import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import agentecomunitario from '../../assets/cursos/agentecomunitario.jpg';

const AgenteComunitario: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Agente Comunitário",
    category: "Serviços Sociais",
    salary: "R$ 2.500 - R$ 4.000",
    description: "O curso de Agente Comunitário capacita os alunos para oferecer suporte e orientação aos membros da comunidade em áreas de saúde, educação e serviços sociais. Os alunos aprendem a promover atividades comunitárias, realizar campanhas de conscientização em saúde, acompanhar as necessidades da comunidade e colaborar com serviços públicos.",
    jobMarket: "O mercado para Agentes Comunitários é estável, com demanda contínua por profissionais em saúde, educação e serviços sociais. A função é essencial para fortalecer a conexão entre a comunidade e os serviços públicos, garantindo acesso a recursos e melhorando a qualidade de vida.",
    duration: "12 meses",
    certification: "Técnico",
    teachingMode: "Online"
  };

  return (
    <div>
      <Header />
      <div className="course-details-custom">
        {/* Seção com imagem de fundo dinâmica */}
        <div className="course-overview-custom" style={{ backgroundImage: `url(${agentecomunitario})` }}>
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

export default AgenteComunitario;
