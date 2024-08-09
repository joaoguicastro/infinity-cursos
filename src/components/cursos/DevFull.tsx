import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import devfull from '../../assets/cursos/desenvolvedorfullstack.webp';

const DevFull: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Desenvolvedor Full Stack",
    category: "Informática",
    salary: "R$ 8.000 - R$ 14.000",
    description: "O Desenvolvedor Full Stack é responsável pelo desenvolvimento tanto do front-end quanto do back-end de aplicações web. Ele cria interfaces de usuário intuitivas, implementa lógica de negócios e integra sistemas, participa do ciclo completo de desenvolvimento de software, e realiza testes e depuração para garantir a qualidade e a funcionalidade das aplicações.",
    jobMarket: "O mercado para Desenvolvedores Full Stack é robusto e em expansão, com alta demanda por profissionais capazes de trabalhar em todas as camadas de desenvolvimento. As empresas valorizam habilidades em diversas tecnologias e ferramentas, garantindo boas perspectivas de emprego e oportunidades de crescimento na área.",
    duration: "8 meses",
    certification: "Técnico",
    teachingMode: "Presencial"
  };

  return (
    <div>
      <Header />
      <div className="course-details-custom">
        <div className="course-overview-custom">
          <div className="image-container-custom">
            <img src={devfull} alt="Informática Profissional" className="course-image-custom" />
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

export default DevFull;
