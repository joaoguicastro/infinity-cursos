import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import bombeiromirim from '../../assets/cursos/bombeiromirim.webp';

const Bombeiromirim: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Bombeiro Mirim",
    category: "Educação",
    salary: "Conhecimento e Disciplina",
    description: "O programa Bombeiro Mirim oferece aos jovens educação sobre segurança contra incêndios, primeiros socorros e práticas de prevenção. Ele promove o desenvolvimento de habilidades como trabalho em equipe, liderança e responsabilidade, além de proporcionar treinamento prático e fomentar a disciplina e a ética.",
    jobMarket: "O programa Bombeiro Mirim contribui para o desenvolvimento pessoal e social dos jovens, preparando-os para futuras oportunidades e fomentando habilidades valiosas. Embora não ofereça remuneração direta, pode abrir portas para oportunidades em áreas de segurança e emergências e ajudar a formar cidadãos mais conscientes e responsáveis.",
    duration: "Variável",
    certification: "Participação",
    teachingMode: "Presencial"
  };

  return (
    <div>
      <Header />
      <div className="course-details-custom">
        <div className="course-overview-custom">
          <div className="image-container-custom">
            <img src={bombeiromirim} alt="Informática Profissional" className="course-image-custom" />
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

export default Bombeiromirim;
