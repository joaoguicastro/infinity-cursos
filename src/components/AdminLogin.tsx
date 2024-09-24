import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Você precisará instalar o react-router-dom se ainda não o fez
import './AdminLogin.css';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook do react-router para manipulação de navegação

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Substitua esta parte pela sua lógica de autenticação real
    if (email === "joaoguicastro100@gmail.com" && password === "123456") {
      // Se as credenciais estiverem corretas, redirecione para a página do admin
      navigate('/admin');
    } else {
      alert("Credenciais inválidas!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
          <button type="submit" className="login-button">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
