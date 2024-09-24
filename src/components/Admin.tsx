import React, { useState, useEffect } from 'react';
import { utils, writeFile } from 'xlsx'; // Importa funções da biblioteca xlsx
import './Admin.css';

const Admin: React.FC = () => {
  const [formData, setFormData] = useState<any[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Função para deletar uma linha
  const handleDelete = (index: number) => {
    const updatedData = [...formData];
    updatedData.splice(index, 1);
    setFormData(updatedData);
    localStorage.setItem('formData', JSON.stringify(updatedData));
  };

  // Função para exportar os dados para Excel
  const handleDownloadExcel = () => {
    const worksheet = utils.json_to_sheet(formData); // Converte os dados JSON para uma planilha
    const workbook = utils.book_new(); // Cria um novo "workbook" (arquivo Excel)
    utils.book_append_sheet(workbook, worksheet, "Alunos"); // Adiciona a planilha ao arquivo Excel
    writeFile(workbook, "alunos-inscritos.xlsx"); // Gera o arquivo Excel
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Lista de Alunos Inscritos</h1>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cidade</th>
            <th>Telefone</th>
            <th>Curso</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {formData.length > 0 ? (
            formData.map((data, index) => (
              <tr key={index}>
                <td>{data.nome}</td>
                <td>{data.cidade}</td>
                <td>{data.telefone}</td>
                <td>{data.curso}</td>
                <td>
                  <button onClick={() => handleDelete(index)} className="delete-button">
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="no-data">
                Nenhum aluno cadastrado até o momento.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Botão para Download do Excel */}
      {formData.length > 0 && (
        <button onClick={handleDownloadExcel} className="download-button">
          Baixar Excel
        </button>
      )}
    </div>
  );
};

export default Admin;
