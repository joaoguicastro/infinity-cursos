import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import coletasangue from '../../assets/cursos/coletasangue.webp';

const ColetaSangue: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Coleta de Sangue",
    category: "Saúde",
    salary: "R$ 2.500 - R$ 4.500",
    description: "O curso de Coleta de Sangue capacita os alunos para realizar a coleta de amostras de sangue, preparar e manusear amostras para análise laboratorial, fornecer cuidados aos pacientes, seguir procedimentos de controle de qualidade e manter registros precisos das coletas.",
    jobMarket: "O mercado para profissionais especializados em Coleta de Sangue é estável, com demanda contínua em hospitais, laboratórios e centros de diagnóstico. A necessidade crescente de exames laboratoriais e diagnósticos precisos oferece boas perspectivas de emprego e oportunidades de crescimento.",
    duration: "8 meses",
    certification: "Técnico",
    teachingMode: "Online"
  };

  return (
    <div>
      <Header />
      <div className="course-details-custom">
        <div className="course-overview-custom" style={{ backgroundImage: `url(${coletasangue})` }}>
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

export default ColetaSangue;
