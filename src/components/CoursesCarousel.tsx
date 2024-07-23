// src/components/CoursesCarousel.tsx
import React, { useState, useRef } from 'react';
import './CoursesCarousel.css';
import logo from '../assets/Logotipo-vertical-normal.png';

const courses = [
  { id: 1, name: "Curso 1", category: "Negócios", image: logo },
  { id: 2, name: "Curso 2", category: "Saúde", image: logo },
  { id: 3, name: "Curso 3", category: "Informática", image: logo },
  { id: 4, name: "Curso 4", category: "Negócios", image: logo },
  { id: 5, name: "Curso 5", category: "Saúde", image: logo },
  { id: 6, name: "Curso 6", category: "Informática", image: logo },
  { id: 7, name: "Curso 7", category: "Negócios", image: logo },
  { id: 8, name: "Curso 8", category: "Saúde", image: logo },
  { id: 9, name: "Curso 9", category: "Informática", image: logo },
  { id: 10, name: "Curso 10", category: "Negócios", image: logo },
];

const CoursesCarousel = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const carouselRef = useRef<HTMLDivElement>(null);

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
            <div className="carousel-item" key={course.id}>
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
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">Inscreva-se agora</span>
      </button>
    </div>
  );
}

export default CoursesCarousel;
