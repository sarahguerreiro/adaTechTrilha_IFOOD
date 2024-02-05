import { noticiasContants } from "../../constants/noticiasConstants";
import { Manchete } from "../manchete/Manchete";

const ListaManchete = () => {
    
    return (
    <div>
        {noticiasContants.map(noticia =>(
            <Manchete
             titulo={noticia.titulo} subtitulo={noticia.subtitulo} imagem={noticia.imagem}
             />
        ))}

    </div>
    )};

export default ListaManchete;