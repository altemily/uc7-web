import ListarAlunos from "../../components/aluno/ListarAlunos/ListarAlunos";
import CadastrarAluno from "../../components/aluno/CadastrarAluno/CadastrarAluno";

function GerenciarAlunos(){
  return(
    <div>
        <ListarAlunos/>
        <CadastrarAluno/>
    </div>
  )
}

export default GerenciarAlunos;