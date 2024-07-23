// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LearningPath from './components/LearningPath';
import Differentials from './components/Differentials';
import CoursesCarousel from './components/CoursesCarousel';
import JoinSection from './components/JoinSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <LearningPath />
      <Differentials />
      <CoursesCarousel />
      <JoinSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
