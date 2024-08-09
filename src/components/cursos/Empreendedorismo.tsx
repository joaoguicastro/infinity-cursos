import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import empreendedorismo from '../../assets/cursos/empreendedorismo.webp';

const Empreendedorismo: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Empreendedorismo",
    category: "Negócios",
    salary: "Variável",
    description: "O curso de Empreendedorismo prepara os alunos para identificar oportunidades de mercado, desenvolver planos de negócios e estratégias, gerenciar operações e equipes, compreender finanças e buscar investimentos, desenvolver estratégias de marketing e vendas, e implementar inovações. O curso foca em habilidades de gestão, liderança e adaptação a mudanças de mercado.",
    jobMarket: "O mercado para empreendedores é dinâmico e diversificado, com oportunidades em várias indústrias e um ambiente crescente para inovação e criação de novos negócios. Empreendedores têm a oportunidade de criar e gerenciar seus próprios negócios, contribuindo para o desenvolvimento econômico. Habilidades em gestão, inovação e marketing são altamente valorizadas.",
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
            <img src={empreendedorismo} alt="Informática Profissional" className="course-image-custom" />
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

export default Empreendedorismo;
