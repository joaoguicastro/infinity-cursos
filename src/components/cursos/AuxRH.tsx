/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import auxrh from '../../assets/cursos/auxiliarrh.jpg';

const AuxRH: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Auxiliar de Recursos Humanos",
    category: "Recursos Humanos",
    salary: "R$ 3.000 - R$ 5.500",
    description: "O curso de Auxiliar de Recursos Humanos capacita os alunos para auxiliar no recrutamento e seleção de candidatos, administrar pessoal, apoiar treinamentos e desenvolvimento, atuar como ponto de contato para colaboradores e manter a documentação e arquivamento de registros.",
    jobMarket: "O mercado para Auxiliares de Recursos Humanos é promissor e estável, com demanda em empresas de diversos tamanhos e setores. O papel é fundamental para uma gestão eficaz de recursos humanos e oferece boas perspectivas de emprego e desenvolvimento na área.",
    duration: "12 meses",
    certification: "Técnico",
    teachingMode: "Online"
  };

  return (
    <div>
      <Header />
      <div className="course-details-custom">
        {/* Imagem de fundo dinâmica */}
        <div className="course-overview-custom" style={{ backgroundImage: `url(${auxrh})` }}>
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

export default AuxRH;
