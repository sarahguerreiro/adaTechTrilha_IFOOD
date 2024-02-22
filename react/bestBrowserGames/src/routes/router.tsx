import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home/Home.tsx";
import Login from "../pages/Login/Login.tsx";
import Jogos from "../pages/Jogos/Jogos.tsx";
import Cadastro from "../pages/Cadastro/Cadastro.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/cadastro",
        element: <Cadastro/>
    },
])

export default router