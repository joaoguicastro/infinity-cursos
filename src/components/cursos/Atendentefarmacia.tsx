import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import atendentefarmacia from '../../assets/cursos/atendentefarmacia.webp';

const Atendentefarmacia: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Informações do curso
  const courseInfo = {
    title: "Desenvolvimento Full",
    category: "Informática",
    salary: "R$ 1.834,74",
    description: `O Técnico em Administração é o profissional apto a exercer atividades de apoio que envolvam gestão de recursos humanos, materiais, financeiros, mercadológicos e da informação. Esse profissional pode também atuar na gestão das mais diversas áreas de uma organização, com vistas à obtenção dos melhores níveis de produtividade, qualidade e operacionalidade, adequados ao segmento de atuação e ao cenário mercadológico, visando à competitividade do negócio.`,
    jobMarket: `Segundo o Instituto Brasileiro de Geografia e Estatística (IBGE), o setor terciário corresponde a quase 70% do Produto Interno Bruto (PIB), que é a soma de tudo o que o país produz, e por mais de 75% dos empregos formais. Entre as empresas que fazem parte desse setor estão: comércio, assessorias, escritórios, bancos, repartições públicas e etc. Além disso o setor secundário (indústrias).`,
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
            <img src={atendentefarmacia} alt="Informática Profissional" className="course-image-custom" />
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

export default Atendentefarmacia;
