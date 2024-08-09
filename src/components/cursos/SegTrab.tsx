/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import segtrab from '../../assets/cursos/auxiliarseguranca.webp';

const SegTrab: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Auxiliar de Segurança do Trabalho",
    category: "Segurança e Saúde Ocupacional",
    salary: "R$ 3.000 - R$ 6.000",
    description: "O curso de Auxiliar de Segurança do Trabalho capacita os alunos para implementar e monitorar normas de segurança, avaliar riscos, promover treinamentos, conduzir inspeções e auditorias, e manter a documentação relacionada à segurança do trabalho.",
    jobMarket: "O mercado para Auxiliares de Segurança do Trabalho é estável e com demanda constante, com oportunidades em indústrias, construção civil, empresas de serviços e instituições públicas. A necessidade de cumprimento das normas de segurança e saúde ocupacional oferece boas perspectivas de emprego e oportunidades de crescimento.",
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
            <img src={segtrab} alt="Informática Profissional" className="course-image-custom" />
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

export default SegTrab;
