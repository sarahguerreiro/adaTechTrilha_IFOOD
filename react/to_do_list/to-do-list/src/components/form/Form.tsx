type FormProps = {
    nomeAtividade: string;
    atualizarNomeAtividade:(novoNome)
    acaoSalvar: () => void;
}
//se o componente recebe propriedades, crie um type

const Form = ({nomeAtividade, acaoSalvar, }) => {
    return (
        <div className='Form'>
              <input type='text' value={novaAtividade} onChange={(e) => setNovaAtividade}></input>
              <button onClick={() => novaAtividadeHandler()} disabled={novaAtividade}>salvar</button>
            </div>
    )
}

export default Form;