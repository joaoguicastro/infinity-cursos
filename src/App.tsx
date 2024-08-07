import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import LearningPath from './components/LearningPath';
import Differentials from './components/Differentials';
import CoursesCarousel from './components/CoursesCarousel';
import JoinSection from './components/JoinSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Informaticaprof from './components/cursos/Informaticaprof';
import './App.css';
import DevFull from './components/cursos/DevFull';
import DevGames from './components/cursos/DevGames';
import EditVideo from './components/cursos/EditVideo';
import DesignerGrafico from './components/cursos/DesignerGrafico';
import MarkegingDigital from './components/cursos/MarkegingDigital';
import Empreendedorismo from './components/cursos/Empreendedorismo';
import Auxadm from './components/cursos/Auxadm';
import Bombeirocivil from './components/cursos/Bombeirocivil';
import Bombeiromirim from './components/cursos/Bombeiromirim';
import Atendenteprehospitalar from './components/cursos/Atendenteprehospitalar';
import Atendentefarmacia from './components/cursos/Atendentefarmacia';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <LearningPath />
            <Differentials />
            <CoursesCarousel />
            <JoinSection />
            <Footer />
            <WhatsAppButton />
          </>
        } />
        <Route path="/informaticaprof" element={<Informaticaprof />} />
        <Route path="/desenvolvimentofullstack" element={<DevFull />} />
        <Route path="/desenvolvimentogames" element={<DevGames />} />
        <Route path="/edicaovideo" element={<EditVideo />} />
        <Route path="/designgrafico" element={<DesignerGrafico />} />
        <Route path="/marketingdigital" element={<MarkegingDigital />} />
        <Route path="/empreendedorismo" element={<Empreendedorismo />} />
        <Route path="/atendentefarmacia" element={<Atendentefarmacia />} />
        <Route path="/atendenteprehospitalar" element={<Atendenteprehospitalar />} />
        <Route path="/bombeiromirim" element={<Bombeiromirim />} />
        <Route path="/bombeirocivil" element={<Bombeirocivil />} />
        <Route path="/auxiliaradministrativo" element={<Auxadm />} />
      </Routes>
    </Router>
  );
};

export default App;
