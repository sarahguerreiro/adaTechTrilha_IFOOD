import { useState } from "react";
import './App.css'
import { Form } from './components/form/Form'
import { ListaAtividades } from './components/listaAtividades/ListaAtividades'

function App() {

  const [novaAtividade, setNovaAtividade] = useState("");

  const [dataConclusao, setDataConclusao] = useState();

  const [ListaAtividades, setListaAtividades] = useState<string[]>([]);

  const novaAtividadeHandler = () => {
    if (novaAtividade.trim().length === 0) return;


    //VERIFICAR SE A DATA É NO FUTURO

    //VERIFICAR SE O NOME DA ATIVIDADE JA EXISTE

    //CRIAR OBJETO PARA ADICIONAR A LISTA

    setListaAtividades(prev => [...prev, novaAtividade]);

    alert(`Atividade: ${novaAtividade} salva com sucesso!`);
    setNovaAtividade("");

  }

//const deletarAtividadeHandler=(idAtividade: string) => {
//VERIFICAR SE ID EXISTE
//SELECIONAR ID
//REMOVER ID
// }

  return (
    <div className='App'>

      <Form nomeAtividade={novaAtividade} atualizarNomeAtividade={setNovaAtividade} acaoSalvar={novaAtividadeHandler} />

      <ListaAtividades listaAtividades={ListaAtividades} />

    </div>

  )
}

export default App
