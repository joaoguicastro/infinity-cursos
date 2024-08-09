/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import saudebucao from '../../assets/cursos/auxiliarsaudebucal.webp';

const SaudeBucao: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Auxiliar de Saúde Bucal",
    category: "Saúde",
    salary: "R$ 2.500 - R$ 4.500",
    description: "O curso de Auxiliar de Saúde Bucal capacita os alunos para auxiliar o dentista durante consultas e procedimentos, prestar cuidados básicos aos pacientes, realizar tarefas administrativas em consultórios, manter registros e participar de programas de educação e prevenção sobre saúde bucal.",
    jobMarket: "O mercado para Auxiliares de Saúde Bucal é estável e crescente, com oportunidades em consultórios odontológicos, clínicas e hospitais. A demanda por cuidados especializados e a preocupação com a saúde bucal oferecem boas perspectivas de emprego e crescimento na área de saúde bucal.",
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
            <img src={saudebucao} alt="Informática Profissional" className="course-image-custom" />
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

export default SaudeBucao;
