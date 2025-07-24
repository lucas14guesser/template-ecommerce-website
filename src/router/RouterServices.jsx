import AdmPedidos from "../pages/AdmPedidos";
import AdmProdutos from "../pages/AdmProdutos";
import Cadastro from "../pages/Cadastro";
import Carrinho from "../pages/Carrinho";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MinhaConta from "../pages/MinhaConta";
import NotFound from "../pages/NotFound";
import Pedidos from "../pages/Pedidos";
import ProdutoEspecifico from "../pages/ProdutoEspecifico";
import Produtos from "../pages/Produtos";
import SegurancaEPrivacidade from "../pages/SegurancaEPrivacidade";
import UserData from "../pages/UserData";

export const routeList = [
    {
        caminho: '/',
        componente: <Home />,
        isPrivate: false,
    },
    {
        caminho: '/*',
        componente: <NotFound />,
        isPrivate: false,
    },
    {
        caminho: '/produtos/produto/:id',
        componente: <ProdutoEspecifico />,
        isPrivate: false,
    },
    {
        caminho: '/produtos/:categoria',
        componente: <Produtos />,
        isPrivate: false,
    },
    {
        caminho: '/buscar',
        componente: <Produtos paginaBusca={true} />,
        isPrivate: false,
    },
    {
        caminho: '/meus-favoritos',
        componente: <Produtos paginaFavoritos={true} />,
        isPrivate: true,
    },
    {
        caminho: '/login',
        componente: <Login />,
        isPrivate: false,
    },
    {
        caminho: '/cadastro',
        componente: <Cadastro />,
        isPrivate: false,
    },
    {
        caminho: '/minha-conta',
        componente: <MinhaConta />,
        isPrivate: true,
    },
    {
        caminho: '/trocas-devolucoes',
        componente: <SegurancaEPrivacidade />,
        isPrivate: false,
    },
    {
        caminho: '/politica-privacidade',
        componente: <SegurancaEPrivacidade />,
        isPrivate: false,
    },
    {
        caminho: '/perguntas-frequentes',
        componente: <SegurancaEPrivacidade />,
        isPrivate: false,
    },
    {
        caminho: '/meus-dados',
        componente: <UserData />,
        isPrivate: true,
    },
    {
        caminho: '/meus-pedidos',
        componente: <Pedidos />,
        isPrivate: true,
    },
    {
        caminho: '/meu-carrinho',
        componente: <Carrinho />,
        isPrivate: true,
    },
    {
        caminho: '/adprodutos',
        componente: <AdmProdutos />,
        isPrivate: true,
    },
    {
        caminho: '/pedidos',
        componente: <AdmPedidos />,
        isPrivate: true,
    },
]