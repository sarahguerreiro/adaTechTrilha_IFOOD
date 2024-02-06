import { Atividade } from "../atividade/Atividade";
import "./ListaAtividades.scss";

type ListaAtividadesProps = {
    listaAtividades: string[];
}

const ListaAtividades = ({listaAtividades}: ListaAtividadesProps) => {
    return (
        <div className="ListaAtividades">
            {listaAtividades.map(atividade => <Atividade key={atividade} atividade={atividade} />)}
        </div>
    )
}

export default ListaAtividades