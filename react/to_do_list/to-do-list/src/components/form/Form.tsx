type FormProps = {
    nomeAtividade: string;
    atualizarNomeAtividade:(novoNome: string) => void;
    acaoSalvar: () => void;
}
//se o componente recebe propriedades, crie um type com props

const Form = ({nomeAtividade, atualizarNomeAtividade,acaoSalvar}:FormProps) => {
    return (
        <div className='Form'>
              <input type='text' value={nomeAtividade} onChange={(e) => atualizarNomeAtividade(e.target.value)}/>

              <button onClick={() => acaoSalvar()} disabled={nomeAtividade.trim().length === 0}>salvar</button>
        </div>
    )
}

export default Form;