/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import agenteportuario from '../../assets/cursos/agenteportuario.webp';

const AgentePortuario: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Agente Portuário",
    category: "Logística",
    salary: "R$ 3.500 - R$ 6.000",
    description: "O curso de Agente Portuário capacita os alunos para coordenar e supervisionar operações de carga e descarga no porto, gerenciar a logística e o planejamento portuário, lidar com a documentação e regulamentação, assegurar a segurança e conformidade com normas, e coordenar com transportadoras e autoridades portuárias.",
    jobMarket: "O mercado para Agentes Portuários é robusto, com demanda impulsionada pelo comércio internacional e pela necessidade de eficiência na logística portuária. A função oferece boas oportunidades de emprego e perspectivas de crescimento, especialmente em portos grandes e movimentados.",
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
            <img src={agenteportuario} alt="Informática Profissional" className="course-image-custom" />
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

export default AgentePortuario;
