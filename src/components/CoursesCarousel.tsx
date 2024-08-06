import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './CoursesCarousel.css';
import informaticaprof from '../assets/cursos/informaticaprof.webp';
import devfull from '../assets/cursos/desenvolvedorfullstack.webp';
import devgames from '../assets/cursos/desenvolvedordegames.webp';
import edicao from '../assets/cursos/edicaodevideo.webp';
import design from '../assets/cursos/designgrafico.webp';
import marketing from '../assets/cursos/marketingdigital.webp';
import empreendedorismo from '../assets/cursos/empreendedorismo.webp';
import cabeleleiroprof from '../assets/cursos/cabeleleiroprof.webp';
import auxadm from '../assets/cursos/auxadm.webp';
import atendentefarmacia from '../assets/cursos/atendentefarmacia.webp';
import atendenteprehospitalar from '../assets/cursos/atendenteprehospitalar.webp';
import bombeirocivil from '../assets/cursos/bombeirocivil.webp';
import bombeiromirim from '../assets/cursos/bombeiromirim.webp';

const courses = [
  { id: 1, name: "Informatica Profissional", category: "Informática", image: informaticaprof, route: "/informaticaprof" },
  { id: 2, name: "Desenvolvimento Full-Stack", category: "Informática", image: devfull, route: "/desenvolvimentofullstack" },
  { id: 3, name: "Desenvolvimento de Games", category: "Informática", image: devgames, route: "/desenvolvimentogames" },
  { id: 4, name: "Ediçao de video", category: "Informática", image: edicao, route: "/edicaovideo" },
  { id: 5, name: "Designer Grafico", category: "Informática", image: design, route: "/designgrafico" },
  { id: 6, name: "Marketing Digital", category: "Informática", image: marketing, route: "/marketingdigital" },
  { id: 7, name: "Empreendedorismo", category: "Negócios", image: empreendedorismo, route: "/empreendedorismo" },
  { id: 8, name: "Auxiliar Administrativo", category: "Negócios", image: auxadm, route: "/auxadm" },
  { id: 9, name: "Atendente Farmacia", category: "Negócios", image: atendentefarmacia, route: "/atendentefarmacia" },
  { id: 10, name: "Atendimento Pre Hospitalar", category: "Saúde", image: atendenteprehospitalar, route: "/atendenteprehospitalar" },
  { id: 11, name: "Bombeiro Civil", category: "Saúde", image: bombeirocivil, route: "/bombeirocivil" },
  { id: 12, name: "Bombeiro Mirim", category: "Saúde", image: bombeiromirim, route: "/bombeiromirim" },
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
    navigate(route); // Navegue para a página de detalhes do curso
  };

  const filteredCourses = selectedCategory === 'Todos' ? courses : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="courses-section" id="cursos">
      <h2>Nossos Cursos</h2>
      <div className="categories">
        {['Todos', 'Negócios', 'Saúde', 'Informática'].map(category => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel">
          {filteredCourses.map(course => (
            <div className="carousel-item" key={course.id} onClick={() => handleCourseClick(course.route)}>
              <img src={course.image} alt={course.name} />
              <p>{course.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <button className="carousel-btn" onClick={handlePrevClick}>←</button>
        <button className="carousel-btn" onClick={handleNextClick}>→</button>
      </div>
    </div>
  );
}

export default CoursesCarousel;
