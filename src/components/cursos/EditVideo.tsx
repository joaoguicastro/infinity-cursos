import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import editvideo from '../../assets/cursos/edicaodevideo.webp';

const EditVideo: React.FC = () => {
  // Informações do curso
  const courseInfo = {
    title: "Edição de Vídeo",
    category: "Informática",
    salary: "R$ 3.000 - R$ 6.000",
    description: "O Editor de Vídeo é responsável por cortar, organizar e ajustar clipes de vídeo e áudio para criar um produto final coeso e atraente. Ele desenvolve vídeos para diferentes formatos e plataformas, aplica correção de cor e efeitos visuais, sincroniza áudio e vídeo, e colabora com a equipe de produção para garantir a visão criativa do projeto.",
    jobMarket: "O mercado para Editores de Vídeo é forte e em crescimento, com alta demanda por conteúdo visual em mídias digitais e sociais. A necessidade de conteúdo de qualidade para marketing e entretenimento garante boas oportunidades de emprego. Profissionais com experiência em software de edição e habilidades para diferentes plataformas têm boas perspectivas de carreira.",
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
            <img src={editvideo} alt="Informática Profissional" className="course-image-custom" />
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

export default EditVideo;
