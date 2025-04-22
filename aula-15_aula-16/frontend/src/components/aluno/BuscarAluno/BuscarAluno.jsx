import React, { useState } from 'react';
import styles from './BuscarAluno.module.css';
import { listarPorMatricula } from '../../../services/alunoService'; 

function BuscarAluno() { 
  const [matricula, setMatricula] = useState(''); 
  const [alunos, setAlunos] = useState([]); 
  const [erro, setErro] = useState(''); 
 

  async function handleBuscar(event) { 
    event.preventDefault(); 
    // Previne o comportamento padrão do formulário (recarregar a página).
    
    try {
      const res = await listarPorMatricula(matricula); 
      // Chama o serviço para listar os alunos com base na matrícula.

      const data = res.data;
      
      if (Array.isArray(data) && data.length > 0) {
        setAlunos(data); 
        // Se encontrar alunos, atualiza o estado `alunos`.

        setErro(''); 
        // Limpa a mensagem de erro se a busca for bem-sucedida.
      } else {
        setAlunos([]); 
        // Se não encontrar alunos, limpa o estado `alunos`.

        setErro('Nenhum aluno encontrado.'); 
        // Define a mensagem de erro se não encontrar nenhum aluno.
      }
    } catch (error) {
      setAlunos([]); 
      // Limpa a lista de alunos em caso de erro.
      
      setErro(error.response.data.mensagem || 'Erro ao buscar aluno.'); 
      // Exibe a mensagem de erro caso o serviço falhe.
    }
  }

  return (
    <div className={styles.container}>
      <h2>Buscar Aluno</h2>
      {/* Título da seção de busca de aluno. */}

      <form onSubmit={handleBuscar}>
        {/* Formulário que chama `handleBuscar` quando submetido. */}
        
        <input
          type="text"
          placeholder="Digite a matrícula"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
          className={styles.input}
        />
        {/* Campo de entrada para digitar a matrícula. */}

        <button type="submit" className={styles.button}>Buscar</button>
        {/* Botão de busca. */}
      </form>

      {erro && <p className={styles.error}>{erro}</p>}
      {/* Exibe mensagem de erro, se houver. */}

      {alunos.length > 0 && (
        <div className={styles.resultado}>
          {/* Exibe os resultados da busca. */}
          
          {alunos.map((aluno) => (
            <div key={aluno.matricula} className={styles.card}>
              <p><strong>Nome:</strong> {aluno.nome}</p>
              <p><strong>Email:</strong> {aluno.email}</p>
              <p><strong>Matrícula:</strong> {aluno.matricula}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BuscarAluno; 
