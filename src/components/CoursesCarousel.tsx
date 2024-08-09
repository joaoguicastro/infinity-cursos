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
import auxadm from '../assets/cursos/auxadm.webp';
import atendentefarmacia from '../assets/cursos/atendentefarmacia.webp';
import atendenteprehospitalar from '../assets/cursos/atendenteprehospitalar.webp';
import bombeirocivil from '../assets/cursos/bombeirocivil.webp';
import bombeiromirim from '../assets/cursos/bombeiromirim.webp';
import auxiliarvet from '../assets/cursos/auxiliarvet.webp';
import coletasangue from '../assets/cursos/coletasangue.webp';
import agentecomunitario from '../assets/cursos/agentecomunitario.webp'
import agenteendemias from '../assets/cursos/agenteendemias.webp'
import agenteportuario from '../assets/cursos/agenteportuario.webp'
import auxiliarnecropsia from '../assets/cursos/auxiliarnecropsia.webp'
import auxiliarrh from '../assets/cursos/auxiliarrh.webp'
import auxiliarsala from '../assets/cursos/auxiliarsala.webp'
import auxiliarsaudebucal from '../assets/cursos/auxiliarsaudebucal.webp'
import auxiliarsegtrabalho from '../assets/cursos/auxiliarseguranca.webp'
import auxiliarfarmaceutico from '../assets/cursos/auxiliarfarmaceutico.webp'
import auxiliardelaboratorio from '../assets/cursos/auxiliardelaboratorio.webp'
import cuidadordeidosos from '../assets/cursos/cuidadordeidosos.webp'
import defesacivil from '../assets/cursos/defesacivil.webp'
import fiscaldomeioambiente from  '../assets/cursos/ficaldomeioambiente.webp'
import gestaohospitalar from '../assets/cursos/gestaohospitalar.webp'
import guardamunicipal from '../assets/cursos/guardamunicipal.webp'




const courses = [
  { id: 1, name: "Informatica Profissional", category: "Informática", image: informaticaprof, route: "/informaticaprof" },
  { id: 2, name: "Desenvolvimento Full-Stack", category: "Informática", image: devfull, route: "/desenvolvimentofullstack" },
  { id: 3, name: "Desenvolvimento de Games", category: "Informática", image: devgames, route: "/desenvolvimentogames" },
  { id: 4, name: "Ediçao de video", category: "Informática", image: edicao, route: "/edicaovideo" },
  { id: 5, name: "Designer Grafico", category: "Informática", image: design, route: "/designgrafico" },
  { id: 6, name: "Marketing Digital", category: "Informática", image: marketing, route: "/marketingdigital" },
  { id: 7, name: "Empreendedorismo", category: "Negócios", image: empreendedorismo, route: "/empreendedorismo" },
  { id: 8, name: "Auxiliar Administrativo", category: "Online", image: auxadm, route: "/auxiliaradministrativo" },
  { id: 9, name: "Atendente Farmacia", category: "Negócios", image: atendentefarmacia, route: "/atendentefarmacia" },
  { id: 10, name: "Atendimento Pre Hospitalar", category: "Saúde", image: atendenteprehospitalar, route: "/atendenteprehospitalar" },
  { id: 11, name: "Bombeiro Civil", category: "Saúde", image: bombeirocivil, route: "/bombeirocivil" },
  { id: 12, name: "Bombeiro Mirim", category: "Saúde", image: bombeiromirim, route: "/bombeiromirim" },
  { id: 13, name: "Auxiliar Veterinario", category: "Saúde", image: auxiliarvet, route: "/auxiliarveterinario" }, 
  { id: 14, name: "Coleta de Sangue", category: "Saúde", image: coletasangue, route: "/coletadesangue" },  
  { id: 15, name: "Agente Comunitario", category: "Online", image: agentecomunitario, route: "/agentecomunitario" },  
  { id: 16, name: "Agente de Endemias", category: "Online", image: agenteendemias, route: "/agenteendemias" }, 
  { id: 17, name: "Agente Portuario", category: "Online", image: agenteportuario, route: "/agenteportuario" }, 
  { id: 18, name: "Auxiliar de Necropsia", category: "Online", image: auxiliarnecropsia, route: "/auxiliarnecropsia" }, 
  { id: 19, name: "Auxiliar de RH", category: "Online", image: auxiliarrh, route: "/auxiliarderh" }, 
  { id: 20, name: "Auxiliar de Sala", category: "Online", image: auxiliarsala, route: "/auxiliardesala" }, 
  { id: 21, name: "Auxiliar de Saude Bucal", category: "Online", image: auxiliarsaudebucal, route: "/auxiliarsaudebucal" }, 
  { id: 22, name: "Auxiliar de Segurança do Trabalho", category: "Online", image: auxiliarsegtrabalho, route: "/auxiliarsegurancatrabalho" }, 
  { id: 23, name: "Auxiliar Farmaceutico", category: "Online", image: auxiliarfarmaceutico, route: "/auxiliarfarmaceutico" }, 
  { id: 24, name: "Auxiliar de Laboratorio", category: "Online", image: auxiliardelaboratorio, route: "/auxiliardelaboratorio" }, 
  { id: 25, name: "Cuidador de idosos", category: "Online", image: cuidadordeidosos, route: "/cuidadordeidosos" }, 
  { id: 26, name: "Defesa Civil", category: "Online", image: defesacivil, route: "/defesacivil" }, 
  { id: 27, name: "Fiscal do Meio Ambiente", category: "Online", image: fiscaldomeioambiente, route: "/fiscaldomeioambiente" }, 
  { id: 28, name: "Gestao Hospitalar", category: "Online", image: gestaohospitalar, route: "/gestaohospitalar" }, 
  { id: 29, name: "Guarda Municipal", category: "Online", image: guardamunicipal, route: "/guardamunicipal" }, 
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
        {['Todos', 'Negócios', 'Saúde', 'Informática', 'Online'].map(category => (
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
