import { useState } from "react";
import { useState } from 'react'
import './App.css'

function App() {
  
const [novaAtividade, setNovaAtividade] = useState("");
const [dataConclusao, setDataConclusao] = useState();
const [ListaAtividades, setListaAtividades] = useState([]);
const novaAtividadeHandler = () => {
  if (novaAtividade.trim().length ===0) {
    
  }
}
  return (
          <div className='App'>
            <div className='Form'>
              <input type='text' value={novaAtividade} onChange={(e) => setNovaAtividade}></input>
              <button onClick={() => novaAtividadeHandler()} disabled={novaAtividade}>salvar</button>
            </div>
            <div className='ListaAtividade'></div>
          </div>
    
  )
}

export default App
