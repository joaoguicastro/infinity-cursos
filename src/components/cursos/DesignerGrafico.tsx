import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import designergraf from '../../assets/cursos/designgrafico.png';

const DesignerGrafico: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Designer Gráfico",
    category: "Informática",
    salary: "R$ 3.000 - R$ 5.000",
    description: "O Designer Gráfico é responsável por criar elementos visuais para comunicação, incluindo logotipos, layouts de sites, materiais publicitários e embalagens. Trabalha com design digital e impressão, desenvolve a identidade visual de marcas e empresas, edita e manipula imagens e vídeos, e colabora com clientes e equipes para entregar soluções criativas e eficazes.",
    jobMarket: "O mercado para Designers Gráficos é forte e em crescimento, com alta demanda em publicidade, marketing, mídia digital e design de produtos. A evolução das tecnologias e a necessidade de empresas para se destacar visualmente garantem boas perspectivas de emprego. Designers com habilidades em novas ferramentas e tendências têm melhores oportunidades.",
    duration: "8 meses",
    certification: "Técnico",
    teachingMode: "Presencial"
  };

  return (
    <div>
      <Header />
      <div className="course-details-custom">
        <div className="course-overview-custom" style={{ backgroundImage: `url(${designergraf})` }}>
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

export default DesignerGrafico;
