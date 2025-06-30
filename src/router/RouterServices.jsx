import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MinhaConta from "../pages/MinhaConta";
import Produtos from "../pages/Produtos";

export const routeList = [
    {
        caminho: '/',
        componente: <Home />,
    },
    {
        caminho: '/produtos/:categoria',
        componente: <Produtos />,
    },
    {
        caminho: '/login',
        componente: <Login />,
    },
    {
        caminho: '/cadastro',
        componente: <Cadastro />,
    },
    {
        caminho: '/minha-conta',
        componente: <MinhaConta />,
    },
]