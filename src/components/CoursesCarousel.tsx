import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './CoursesCarousel.css'; // Atualizando o nome do arquivo CSS
import informaticaprof from '../assets/cursos/informaticaprof.jpg';
import devfull from '../assets/cursos/desenvolvedorfullstack.jpg';
import devgames from '../assets/cursos/desenvolvedordegames.webp';
import edicao from '../assets/cursos/edicaodevideo.jpg';
import design from '../assets/cursos/designgrafico.png';
import marketing from '../assets/cursos/marketingdigital.jpg';
import empreendedorismo from '../assets/cursos/empreendedorismo.png';
import auxadm from '../assets/cursos/auxadm.png';
import atendentefarmacia from '../assets/cursos/atendentefarmacia.jpg';
import atendenteprehospitalar from '../assets/cursos/atendenteprehospitalar.png';
import bombeirocivil from '../assets/cursos/bombeirocivil.png';
import bombeiromirim from '../assets/cursos/bombeiromirim.avif';
import auxiliarvet from '../assets/cursos/auxiliarvet.jpg';
import coletasangue from '../assets/cursos/coletasangue.webp';
import agentecomunitario from '../assets/cursos/agentecomunitario.jpg';
import agenteendemias from '../assets/cursos/agenteendemias.jpg';
import agenteportuario from '../assets/cursos/agenteportuario.jpg';
import auxiliarnecropsia from '../assets/cursos/auxiliarnecropsia.jpg';
import auxiliarrh from '../assets/cursos/auxiliarrh.jpg';
import auxiliarsala from '../assets/cursos/auxiliarsala.jpg';
import auxiliarsaudebucal from '../assets/cursos/saudebucao.webp';
import auxiliarsegtrabalho from '../assets/cursos/auxiliarseguranca.jpeg';
import auxiliardelaboratorio from '../assets/cursos/auxiliardelaboratorio.jpg';
import cuidadordeidosos from '../assets/cursos/cuidadordeidosos.png';
import defesacivil from '../assets/cursos/defesacivil.jpeg';
import fiscaldomeioambiente from '../assets/cursos/ficaldomeioambiente.png';
import gestaohospitalar from '../assets/cursos/gestaohospitalar.jpg';
import guardamunicipal from '../assets/cursos/guardamunicipal.jpg';

const courses = [
  { id: 1, name: "Informatica Profissional", category: "Informática", image: informaticaprof, route: "/informaticaprof" },
  { id: 2, name: "Desenvolvimento Full-Stack", category: "Informática", image: devfull, route: "/desenvolvimentofullstack" },
  { id: 3, name: "Desenvolvimento de Games", category: "Informática", image: devgames, route: "/desenvolvimentogames" },
  { id: 4, name: "Edição de vídeo", category: "Informática", image: edicao, route: "/edicaovideo" },
  { id: 5, name: "Designer Gráfico", category: "Informática", image: design, route: "/designgrafico" },
  { id: 6, name: "Marketing Digital", category: "Informática", image: marketing, route: "/marketingdigital" },
  { id: 7, name: "Empreendedorismo", category: "Negócios", image: empreendedorismo, route: "/empreendedorismo" },
  { id: 8, name: "Auxiliar Administrativo", category: "Online", image: auxadm, route: "/auxiliaradministrativo" },
  { id: 9, name: "Atendente Farmácia", category: "Negócios", image: atendentefarmacia, route: "/atendentefarmacia" },
  { id: 10, name: "Atendimento Pré-Hospitalar", category: "Saúde", image: atendenteprehospitalar, route: "/atendenteprehospitalar" },
  { id: 11, name: "Bombeiro Civil", category: "Saúde", image: bombeirocivil, route: "/bombeirocivil" },
  { id: 12, name: "Herói Mirim", category: "Saúde", image: bombeiromirim, route: "/bombeiromirim" },
  { id: 13, name: "Auxiliar Veterinário", category: "Saúde", image: auxiliarvet, route: "/auxiliarveterinario" },
  { id: 14, name: "Coleta de Sangue", category: "Saúde", image: coletasangue, route: "/coletadesangue" },
  { id: 15, name: "Agente Comunitário", category: "Online", image: agentecomunitario, route: "/agentecomunitario" },
  { id: 16, name: "Agente de Endemias", category: "Online", image: agenteendemias, route: "/agenteendemias" },
  { id: 17, name: "Agente Portuário", category: "Online", image: agenteportuario, route: "/agenteportuario" },
  { id: 18, name: "Auxiliar de Necropsia", category: "Online", image: auxiliarnecropsia, route: "/auxiliarnecropsia" },
  { id: 19, name: "Auxiliar de RH", category: "Online", image: auxiliarrh, route: "/auxiliarderh" },
  { id: 20, name: "Auxiliar de Sala", category: "Online", image: auxiliarsala, route: "/auxiliardesala" },
  { id: 21, name: "Auxiliar de Saúde Bucal", category: "Online", image: auxiliarsaudebucal, route: "/auxiliarsaudebucal" },
  { id: 22, name: "Auxiliar de Segurança do Trabalho", category: "Online", image: auxiliarsegtrabalho, route: "/auxiliarsegurancatrabalho" },
  { id: 23, name: "Auxiliar de Laboratório", category: "Online", image: auxiliardelaboratorio, route: "/auxiliardelaboratorio" },
  { id: 24, name: "Cuidador de Idosos", category: "Online", image: cuidadordeidosos, route: "/cuidadordeidosos" },
  { id: 25, name: "Defesa Civil", category: "Online", image: defesacivil, route: "/defesacivil" },
  { id: 26, name: "Fiscal do Meio Ambiente", category: "Online", image: fiscaldomeioambiente, route: "/fiscaldomeioambiente" },
  { id: 27, name: "Gestão Hospitalar", category: "Online", image: gestaohospitalar, route: "/gestaohospitalar" },
  { id: 28, name: "Guarda Municipal", category: "Online", image: guardamunicipal, route: "/guardamunicipal" },
];

const CoursesCarousel: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const carouselRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleCourseClick = (route: string) => {
    navigate(route);
  };

  const filteredCourses = selectedCategory === 'Todos' ? courses : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="custom-courses-section" id="custom-cursos">
      <h2>Nossos Cursos</h2>
      <div className="custom-categories">
        {['Todos', 'Negócios', 'Saúde', 'Informática', 'Online'].map(category => (
          <button
            key={category}
            className={selectedCategory === category ? 'custom-active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="custom-carousel-container" ref={carouselRef}>
        <div className="custom-carousel">
          {filteredCourses.map(course => (
            <div className="custom-carousel-item" key={course.id} onClick={() => handleCourseClick(course.route)}>
              <img src={course.image} alt={course.name} />
              <p>{course.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="custom-carousel-controls">
        <button className="custom-carousel-btn" onClick={handlePrevClick}>←</button>
        <button className="custom-carousel-btn" onClick={handleNextClick}>→</button>
      </div>
    </div>
  );
}

export default CoursesCarousel;
