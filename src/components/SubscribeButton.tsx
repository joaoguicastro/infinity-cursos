import React from 'react';
import './SubscribeButton.css';

const SubscribeButton: React.FC = () => {
  return (
    <a href='https://api.whatsapp.com/send?phone=5585991154215&text=Oi,%20estou%20precisando%20de%20mais%20informaçoes'>
      <button className="botao">
        Inscreva-se já
      </button>
    </a>
  );
};

export default SubscribeButton;
