/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import auxadm from '../../assets/cursos/auxadm.png';

const Auxadm: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Auxiliar Administrativo",
    category: "Negócios",
    salary: "R$ 1.500 - R$ 2.500",
    description: "O Auxiliar Administrativo é responsável por organizar e arquivar documentos, preparar relatórios, realizar atividades administrativas diárias e oferecer suporte a clientes e fornecedores. Suas tarefas incluem gestão de agenda, controle de processos administrativos, e suporte à equipe em diversas funções para garantir o bom funcionamento das operações.",
    jobMarket: "O mercado para Auxiliares Administrativos é amplo e estável, com demanda constante em setores variados, incluindo empresas privadas, órgãos públicos e instituições de ensino. O crescimento do setor de serviços e a necessidade de eficiência administrativa oferecem boas perspectivas de emprego. Profissionais com habilidades administrativas e organizacionais são altamente valorizados.",
    duration: "8 meses",
    certification: "Técnico",
    teachingMode: "Presencial"
  };

  return (
    <div>
      <Header />
      <div className="course-details-custom">
        {/* Imagem de fundo dinâmica */}
        <div className="course-overview-custom" style={{ backgroundImage: `url(${auxadm})` }}>
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

export default Auxadm;
