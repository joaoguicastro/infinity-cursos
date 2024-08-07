import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import bombeirocivil from '../../assets/cursos/bombeirocivil.webp';

const Bombeirocivil: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Bombeiro Civil",
    category: "Segurança",
    salary: "R$ 2.500 - R$ 4.000",
    description: "O Bombeiro Civil é responsável por combater incêndios, realizar resgates e prestar primeiros socorros em situações de emergência. Além disso, realiza inspeções de segurança, identifica riscos, e participa de treinamentos para manter habilidades atualizadas. Também cuida da manutenção dos equipamentos de combate a incêndio e resgate.",
    jobMarket: "O mercado para Bombeiros Civis está em crescimento, com alta demanda devido à preocupação com segurança e prevenção de acidentes. A necessidade de manter normas de segurança e estar preparado para emergências oferece boas perspectivas de emprego, especialmente em indústrias, empresas e eventos. Profissionais com treinamento especializado têm melhores oportunidades.",
    duration: "18 meses",
    certification: "Técnico",
    teachingMode: "Presencial"
  };

  return (
    <div>
      <Header />
      <div className="course-details-custom">
        <div className="course-overview-custom">
          <div className="image-container-custom">
            <img src={bombeirocivil} alt="Informática Profissional" className="course-image-custom" />
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

export default Bombeirocivil;
