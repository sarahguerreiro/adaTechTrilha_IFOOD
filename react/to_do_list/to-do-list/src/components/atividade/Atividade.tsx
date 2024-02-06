import "./Atividade.css";

type AtividadeProps = {
    atividade: string;
}

export const Atividade = ({atividade}: AtividadeProps) => {
    return <div className='Atividade'>{atividade}</div>
}

export default Atividade;