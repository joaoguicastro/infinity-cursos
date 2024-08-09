import React from 'react';
import Header from '../Header';
import WhatsAppButton from '../WhatsAppButton';
import './Cursos.css';
import atendenteprehospitalar from '../../assets/cursos/atendenteprehospitalar.webp';

const Atendenteprehospitalar: React.FC = () => {

  // Informações do curso
  const courseInfo = {
    title: "Atendente Pré-Hospitalar",
    category: "Saúde",
    salary: "R$ 2.000 - R$ 3.500",
    description: "O Atendente Pré-Hospitalar é responsável por prestar primeiros socorros e atendimento inicial em situações de emergência, até que o paciente possa receber cuidados mais avançados em um ambiente hospitalar. Entre suas funções estão: realizar avaliações rápidas do estado do paciente, administrar tratamentos de emergência, estabilizar pacientes, e colaborar com equipes de resgate e transporte para garantir que o paciente receba o tratamento adequado o mais rápido possível.",
    jobMarket: "O mercado para Atendentes Pré-Hospitalares está em crescimento devido ao aumento da demanda por serviços de emergência e à expansão do setor de saúde. A necessidade de profissionais qualificados é alta, especialmente em áreas metropolitanas e para operações de resgate. O envelhecimento da população e o aumento dos acidentes de trânsito e outras emergências contribuem para boas perspectivas de emprego.",
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
            <img src={atendenteprehospitalar} alt="Informática Profissional" className="course-image-custom" />
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

export default Atendenteprehospitalar;
