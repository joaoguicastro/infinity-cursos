/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import atendentefarmacia from '../../assets/cursos/atendentefarmacia.jpg';

const Atendentefarmacia: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Atendente de Farmácia",
    category: "Saúde",
    salary: "R$ 1.500 - R$ 2.500",
    description: "O Atendente de Farmácia é responsável por dispensar medicamentos, orientar os pacientes sobre o uso correto dos produtos e oferecer suporte na organização e manutenção do estoque. Entre suas responsabilidades estão o atendimento ao cliente, o gerenciamento do estoque de medicamentos e produtos, o registro de vendas e o apoio à equipe de farmacêuticos e outros profissionais da saúde.",
    jobMarket: "O mercado para Atendentes de Farmácia está em expansão no Brasil, com uma demanda crescente devido ao aumento dos serviços de saúde e à necessidade de profissionais qualificados. O envelhecimento da população e a ampliação do acesso a medicamentos contribuem para o crescimento desse setor, oferecendo boas perspectivas de emprego em farmácias, drogarias, hospitais e clínicas.",
    duration: "8 meses",
    certification: "Técnico",
    teachingMode: "Presencial"
  };

  return (
    <div>
      <Header />
      <div className="course-details-custom">
        {/* Seção com imagem de fundo dinâmica */}
        <div className="course-overview-custom" style={{ backgroundImage: `url(${atendentefarmacia})` }}>
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

export default Atendentefarmacia;
