// src/App.tsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main className="content">
        {/* Conteúdo adicional da landing page */}
      </main>
    </div>
  );
};

export default App;
