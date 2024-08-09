import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import devgames from '../../assets/cursos/desenvolvedordegames.webp';

const DevGames: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Desenvolvedor de Games",
    category: "Informática",
    salary: "R$ 7.000 - R$ 12.000",
    description: "O Desenvolvedor de Games é responsável por criar e programar jogos para diversas plataformas, como consoles, PC e dispositivos móveis. Suas tarefas incluem o design de mecânicas de jogo, programação e codificação usando ferramentas como Unity e Unreal Engine, colaboração com artistas e designers, e testes para garantir a qualidade e a experiência de usuário do jogo.",
    jobMarket: "O mercado para Desenvolvedores de Games está em expansão, com alta demanda devido ao crescimento da indústria de jogos e do interesse por jogos digitais. As oportunidades são amplas em empresas de desenvolvimento de jogos, estúdios independentes e setores emergentes como AR e VR. Profissionais com habilidades avançadas em programação e tecnologias emergentes têm boas perspectivas de carreira.",
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
            <img src={devgames} alt="Informática Profissional" className="course-image-custom" />
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

export default DevGames;
