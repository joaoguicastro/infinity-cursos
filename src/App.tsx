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
import AuxVet from './components/cursos/AuxVet';
import ColetaSangue from './components/cursos/ColetaSangue';
import AgenteComunitario from './components/cursos/AgenteComunitario';
import AgenteEndemias from './components/cursos/AgenteEndemias';
import AgentePortuario from './components/cursos/AgentePortuario';
import AuxiliarNecropsia from './components/cursos/AuxiliarNecropsia';
import AuxSala from './components/cursos/AuxSala';
import SaudeBucao from './components/cursos/SaudeBucao';
import SegTrab from './components/cursos/SegTrab';
import AuxFarm from './components/cursos/AuxFarm';
import CuidadorIdosos from './components/cursos/CuidadorIdosos';
import DefCivil from './components/cursos/DefCivil';
import FiscalMeio from './components/cursos/FiscalMeio';
import GestaoHospital from './components/cursos/GestaoHospital';
import GuardaMuni from './components/cursos/GuardaMuni';
import AuxLaboratorio from './components/cursos/AuxLaboratorio';
import AuxRH from './components/cursos/AuxRH';

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
        <Route path="/auxiliarveterinario" element={<AuxVet />} />
        <Route path="/coletadesangue" element={<ColetaSangue />} />
        <Route path="/agentecomunitario" element={<AgenteComunitario />} />
        <Route path="/agenteendemias" element={<AgenteEndemias />} />
        <Route path="/agenteportuario" element={<AgentePortuario />} />
        <Route path="/auxiliarnecropsia" element={<AuxiliarNecropsia />} />
        <Route path="/auxiliardesala" element={<AuxSala />} />
        <Route path="/auxiliarsaudebucal" element={<SaudeBucao />} />
        <Route path="/auxiliarsegurancatrabalho" element={<SegTrab />} />
        <Route path="/auxiliarfarmaceutico" element={<AuxFarm />} />
        <Route path="/cuidadordeidosos" element={<CuidadorIdosos />} />
        <Route path="/defesacivil" element={<DefCivil />} />
        <Route path="/fiscaldomeioambiente" element={<FiscalMeio />} />
        <Route path="/gestaohospitalar" element={<GestaoHospital />} />
        <Route path="/guardamunicipal" element={<GuardaMuni />} />
        <Route path="/auxiliardelaboratorio" element={<AuxLaboratorio />} />
        <Route path="/auxiliarderh" element={<AuxRH />} />
      </Routes>
    </Router>
  );
};

export default App;
