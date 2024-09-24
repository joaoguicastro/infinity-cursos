import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import informaticaprof from '../../assets/cursos/informaticaprof.jpg';

const Informaticaprof: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Informática Profissional",
    category: "Tecnologia",
    salary: "R$ 3.500 - R$ 7.000",
    description: "O curso de Informática Profissional capacita os alunos para oferecer suporte técnico, desenvolver sistemas de software, gerenciar redes de computadores, trabalhar com bancos de dados e implementar práticas de segurança da informação. O curso aborda diagnóstico e solução de problemas técnicos, desenvolvimento de aplicações, gerenciamento de redes e proteção contra ameaças cibernéticas.",
    jobMarket: "O mercado para profissionais de informática é robusto e em crescimento, com alta demanda por suporte técnico, desenvolvimento de sistemas, gerenciamento de redes e segurança da informação. A digitalização e a necessidade de tecnologia garantem boas perspectivas de emprego e crescimento para profissionais qualificados.",
    duration: "6 meses",
    certification: "Técnico",
    teachingMode: "Presencial"
  };

  return (
    <div>
      <Header />
      <div className="course-details-custom">
        <div className="course-overview-custom" style={{ backgroundImage: `url(${informaticaprof})` }}>
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

export default Informaticaprof;
