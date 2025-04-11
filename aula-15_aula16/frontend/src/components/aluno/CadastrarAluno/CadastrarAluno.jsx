import React, {useState} from "react";
import {criar} from '../../../services/alunoService'

function CadastrarAluno(){
  const[nome, setNome] = useState('');
  const[matricula, setMatricula] = useState('');
  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState('');
  const[erroMsg, setErroMsg] = useState('');
  const[sucessoMsg, setSucessoMsg] = useState('');

  async function criarAluno({nome, matricula, email, senha}){
    try {
      await criar({nome, matricula, email, senha})
      setSucessoMsg('Aluno cadastrado com sucesso.')
      setErroMsg('');
    } catch (error) {
      setErroMsg(error.response.data.mensagem);
    }
  }

  return(
          <div>
                <h2>Cadastrar Aluno</h2>
                <input
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Digite o nome"
                  />  

                                  <input
                      type="text"
                      value={matricula}
                      onChange={(e) => setMatricula(e.target.value)}
                      placeholder="Digite a sua matricula"
                  />   

                  <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Digite seu email"
                  /> 

                  <input
                      type="text"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      placeholder="Digite a senha"
                  /> 

                <button onClick={() => criarAluno({ nome, matricula, email, senha })}>Cadastrar</button>
                {erroMsg && <p>{erroMsg}</p>}
                {sucessoMsg && <p>{sucessoMsg}</p>}

          </div>
  );

}

export default CadastrarAluno;


