import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MinhaConta from "../pages/MinhaConta";
import ProdutoEspecifico from "../pages/ProdutoEspecifico";
import Produtos from "../pages/Produtos";

export const routeList = [
    {
        caminho: '/',
        componente: <Home />,
    },
    {
        caminho: '/produtos/produto/:id',
        componente: <ProdutoEspecifico />,
    },
    {
        caminho: '/produtos/:categoria',
        componente: <Produtos />,
    },
    {
        caminho: '/buscar',
        componente: <Produtos paginaBusca={true} />,
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