import { noticiasContants } from "../../constants/noticiasConstants";
import { Manchete } from "../manchete/Manchete";

const ListaManchete = () => {
    const semNoticias = <span>Não há notícias disponiveis.</span>

    return (
    <div>
        {noticiasConstants.length > 0 ? noticiasContants.map(noticia =>(
            <Manchete titulo={noticia.titulo} subtitulo={noticia.subtitulo} imagem={noticia.imagem}
        )) :semNoticias }

    </div>
)}

export default ListaManchete