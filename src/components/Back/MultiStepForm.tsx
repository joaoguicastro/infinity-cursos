// src/components/MultiStepForm.tsx
import React, { useState } from 'react';
import FormStep from './FormStep';
import './MultiStepForm.css';

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    estado: 'Ceará',
    cidade: 'Maracanaú',
    unidade: 'Infinity Cursos Shopping Pitaguary',
    curso: ''
  });

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('https://formspree.io/f/mzzpdybw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="multi-step-form">
      <FormStep
        title="Olá, que bom ter você aqui! Sou a Gau e vou te ajudar com esse formulário"
        currentStep={currentStep}
        stepNumber={1}
        onNext={handleNextStep}
        isNextDisabled={!formData.nome}
      >
        <input
          type="text"
          name="nome"
          placeholder="Nome Completo *"
          value={formData.nome}
          onChange={handleChange}
          required
        />
      </FormStep>
      <FormStep
        title="Qual o seu telefone?"
        currentStep={currentStep}
        stepNumber={2}
        onNext={handleNextStep}
        onBack={handlePrevStep}
        isNextDisabled={!formData.telefone}
      >
        <input
          type="text"
          name="telefone"
          placeholder="Celular *"
          value={formData.telefone}
          onChange={handleChange}
          required
        />
      </FormStep>
      <FormStep
        title="Escolha a unidade do Grau Técnico mais próxima de você!"
        currentStep={currentStep}
        stepNumber={3}
        onNext={handleNextStep}
        onBack={handlePrevStep}
      >
        <select
          name="estado"
          value={formData.estado}
          onChange={handleChange}
          required
        >
          <option value="Ceará">Ceará</option>
        </select>
        <select
          name="cidade"
          value={formData.cidade}
          onChange={handleChange}
          required
        >
          <option value="Maracanaú">Maracanaú</option>
        </select>
        <select
          name="unidade"
          value={formData.unidade}
          onChange={handleChange}
          required
        >
          <option value="Infinity Cursos Shopping Pitaguary">Infinity Cursos Shopping Pitaguary</option>
        </select>
      </FormStep>
      <FormStep
        title="Escolha o curso do seu interesse."
        currentStep={currentStep}
        stepNumber={4}
        onNext={handleNextStep}
        onBack={handlePrevStep}
      >
        <select
          name="curso"
          value={formData.curso}
          onChange={handleChange}
          required
        >
          <option value="">Selecione um curso</option>
          <option value="Curso 1">Curso 1</option>
          <option value="Curso 2">Curso 2</option>
          <option value="Curso 3">Curso 3</option>
          <option value="Curso 4">Curso 4</option>
          <option value="Curso 5">Curso 5</option>
          <option value="Curso 6">Curso 6</option>
          <option value="Curso 7">Curso 7</option>
          <option value="Curso 8">Curso 8</option>
          <option value="Curso 9">Curso 9</option>
          <option value="Curso 10">Curso 10</option>
        </select>
      </FormStep>
      <FormStep
        title="Confirme suas informações."
        currentStep={currentStep}
        stepNumber={5}
        onNext={handleNextStep}
        onBack={handlePrevStep}
      >
        <p>Nome: {formData.nome}</p>
        <p>Telefone: {formData.telefone}</p>
        <p>Estado: {formData.estado}</p>
        <p>Cidade: {formData.cidade}</p>
        <p>Unidade: {formData.unidade}</p>
        <p>Curso: {formData.curso}</p>
        <button type="submit">Enviar</button>
      </FormStep>
    </form>
  );
};

export default MultiStepForm;
