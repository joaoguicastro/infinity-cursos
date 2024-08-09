// src/components/WhatsAppButton.tsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton: React.FC = () => {
  return (
    <a href="https://w.app/infinitycursos" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
