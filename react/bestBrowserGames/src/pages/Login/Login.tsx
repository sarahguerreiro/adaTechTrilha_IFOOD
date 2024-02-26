import { LoginType } from "../../types/login.type";

const Login = () => {

    const realizarLogin = (novoUsuario: LoginType) => {
        const listaAtual = localStorage.getItem('listaUsuarios');
        let listaUsuariosCadastrados = [];

        if (listaAtual) {
            listaUsuarios = JSON.parse(listaAtual);
        }
    }

    const submitHandler = (e: any) => {
        e.preventDefault();
        const loginUsuario: LoginType = {
            email: e.target[0].value,
            senha: e.target[1].value
        }
        realizarLogin(loginUsuario);
    }

    return <div>
        <h2>Login</h2>
        <form>
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="senha"/>
            <button>Acessar</button>
        </form>
    </div>
}

export default Login