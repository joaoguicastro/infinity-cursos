// src/components/Hero.tsx
import React, { useState } from 'react';
import './Hero.css';
import logo from '../assets/Logotipo-vertical-normal.png';

const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cidade: '',
    telefone: '',
    curso: '',
  });

  const [errors, setErrors] = useState({
    nome: '',
    cidade: '',
    telefone: '',
    curso: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { nome: '', cidade: '', telefone: '', curso: '' };

    if (!formData.nome) {
      newErrors.nome = 'O campo Nome Completo é obrigatório.';
      isValid = false;
    }
    if (!formData.cidade) {
      newErrors.cidade = 'O campo Cidade é obrigatório.';
      isValid = false;
    }
    if (!formData.telefone) {
      newErrors.telefone = 'O campo Telefone é obrigatório.';
      isValid = false;
    }
    if (!formData.curso) {
      newErrors.curso = 'Escolha uma área de interesse.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Construindo a URL do WhatsApp com os dados do formulário
      const whatsAppUrl = `https://api.whatsapp.com/send?phone=5585991154215&text=Oi,%20me%20chamo%20${encodeURIComponent(formData.nome)},%20sou%20de%20${encodeURIComponent(formData.cidade)}%20e%20gostaria%20de%20mais%20informações%20sobre%20o%20curso%20de%20${encodeURIComponent(formData.curso)}.%20Meu%20telefone%20é%20${encodeURIComponent(formData.telefone)}.`;

      // Redirecionando para o WhatsApp
      window.open(whatsAppUrl, '_blank');
    }
  };

  return (
    <section className="hero-renamed">
      <div className="hero-content-renamed">
        <div className="hero-logo-renamed">
          <img src={logo} alt="Infinity Cursos" />
        </div>

        <div className="form-container-renamed">
          <h2 id='texto-h2'>Interessado nos nossos cursos? Cadastre-se!</h2>
          <form onSubmit={handleSubmit} className="form-renamed">
            <input
              placeholder="Nome Completo"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="form-input-renamed"
              type="text"
            />
            {errors.nome && <span className="error-message-renamed">{errors.nome}</span>}

            <input
              placeholder="Cidade"
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
              className="form-input-renamed"
              type="text"
            />
            {errors.cidade && <span className="error-message-renamed">{errors.cidade}</span>}

            <input
              placeholder="Telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="form-input-renamed"
              type="text"
            />
            {errors.telefone && <span className="error-message-renamed">{errors.telefone}</span>}

            <select
              name="curso"
              value={formData.curso}
              onChange={handleChange}
              className="form-input-renamed"
            >
              <option value="">Escolha a área de Interesse</option>
              <option value="Tecnologia">Tecnologia</option>
              <option value="Saúde">Saúde</option>
              <option value="Negócios">Negócios</option>
            </select>
            {errors.curso && <span className="error-message-renamed">{errors.curso}</span>}

            <button type="submit" className="form-button-renamed">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
