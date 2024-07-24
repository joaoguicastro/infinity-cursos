// src/components/FormStep.tsx
import React from 'react';
import './FormStep.css';

interface FormStepProps {
  title: string;
  children: React.ReactNode;
  currentStep: number;
  stepNumber: number;
  onNext: () => void;
  onBack?: () => void;
  isNextDisabled?: boolean;
}

const FormStep: React.FC<FormStepProps> = ({
  title,
  children,
  currentStep,
  stepNumber,
  onNext,
  onBack,
  isNextDisabled
}) => {
  return (
    <section id='formulario'>
    <div className={`form-step ${currentStep === stepNumber ? 'active' : ''}`}>
      <h2>{title}</h2>
      {children}
      <div className="form-step-controls">
        {onBack && (
          <button type="button" onClick={onBack}>
            Voltar
          </button>
        )}
        <button type="button" onClick={onNext} disabled={isNextDisabled}>
          Próximo
        </button>
      </div>
    </div>
    </section>
  );
};

export default FormStep;
