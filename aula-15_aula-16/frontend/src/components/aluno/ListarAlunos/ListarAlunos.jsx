import React, {useState, useEffect} from "react";
import { listarTodos } from "../../../services/alunoService"; // Importa a função do serviço para listar todos os alunos


function ListarAlunos(){
  const [alunos, setAlunos] = useState([]); // Estado para armazenar a lista de alunos
  const [errorMsg, setErrorMsg] = useState(''); // Estado para armazenar a mensagem de erro

  // Função que é chamada ao carregar o componente para buscar os alunos.
  async function fetchAlunos() {
    try {
      const resposta = await listarTodos(); // Chama o serviço para listar todos os alunos
      setAlunos(resposta.data)
      setErrorMsg('')
    } catch (error) {
      setAlunos([]);
      console.error(error);
      setErrorMsg(error.response.data.mensagem || 'Erro ao listar alunos.');
    }
  }

  useEffect(()=>{
    fetchAlunos();// Chama a função para buscar os alunos
  }, []) // O array vazio garante que e função seja chamada apenas uma vez quando o compontente for chamado

  return(
    <div>
        <h2>Lista de Alunos</h2>
        {errorMsg && <p>{errorMsg}</p>} {/* Exibe mensagem de erro, se houver.*/}
        <ul>
            {
                alunos.map((aluno) => ( // Criação do map. Cada linha do banco (tabela) está mapeada
                  <li key={aluno.matricula}>  {/* A key indica a referência de cada registro (única)*/}
                  {aluno.nome} - {aluno.email} - Matricula:{aluno.matricula} {/* Para acessar cada valor, devemos usar a variável map (aluno) e o campo respectivo da tabela. */}
                  </li>
                ))
            }
        </ul>
    </div>
  )
}


export default ListarAlunos;

