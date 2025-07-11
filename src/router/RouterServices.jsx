import AdmPedidos from "../pages/AdmPedidos";
import AdmProdutos from "../pages/AdmProdutos";
import Cadastro from "../pages/Cadastro";
import Carrinho from "../pages/Carrinho";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MinhaConta from "../pages/MinhaConta";
import Pedidos from "../pages/Pedidos";
import ProdutoEspecifico from "../pages/ProdutoEspecifico";
import Produtos from "../pages/Produtos";
import SegurancaEPrivacidade from "../pages/SegurancaEPrivacidade";
import UserData from "../pages/UserData";

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
        caminho: '/meus-favoritos',
        componente: <Produtos paginaFavoritos={true} />,
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
    {
        caminho: '/trocas-devolucoes',
        componente: <SegurancaEPrivacidade />,
    },
    {
        caminho: '/politica-privacidade',
        componente: <SegurancaEPrivacidade />,
    },
    {
        caminho: '/perguntas-frequentes',
        componente: <SegurancaEPrivacidade />,
    },
    {
        caminho: '/meus-dados',
        componente: <UserData />,
    },
    {
        caminho: '/meus-pedidos',
        componente: <Pedidos />,
    },
    {
        caminho: '/adprodutos',
        componente: <AdmProdutos />,
    },
    {
        caminho: '/pedidos',
        componente: <AdmPedidos />,
    },
]