import { useState } from "react";
import { UsuarioType } from "../../types/usuario.type";

const Cadastro = () => {
    const [usuario, setUsuario] = useState<UsuarioType>();

    const submitHandler = (e: any) => {
        e.preventDefault();
        const novoUsuario: UsuarioType = {
            nome: e.target[0].value,
            email: e.target[1].value,
            senha: e.target[2].value,
            dataNasc: e.target[3].value,
            estado: e.target[4].value,
            pais: e.target[5].value,
        }
        console.log(novoUsuario)
    }

    return <div className="Cadastro">
    <h2>Novo usuário</h2>
    <form onSubmit={submitHandler}>
        <input type="text" placeholder ="Nome Completo" required/>
        <input type="email" placeholder ="E-mail" required/>
        <input type="password" placeholder ="Senha"required/>
        <input type="date" placeholder ="Data de Nascimento" required/>
        <input type="text" placeholder ="Estado"required/>
        <input type="text" placeholder ="País" required/>
        <button type="submit">CADASTRAR</button>

    </form>


    </div>
}

export default Cadastro;