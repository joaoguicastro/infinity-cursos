// src/components/WhatsAppButton.tsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton: React.FC = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=5585991154215&text=Oi,%20estou%20precisando%20de%20mais%20informaçoes" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
