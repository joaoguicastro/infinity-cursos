// src/App.tsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Hero />
      </div>
    </div>
  );
};

export default App;
