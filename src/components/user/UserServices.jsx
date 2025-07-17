import { FaRegListAlt, FaRegHeart, FaRegUser, FaProductHunt } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { useAuth } from "../context/AuthContext";

export const admins = [
    {
        id: 1,
        nome: 'Admin',
        email: 'admin@email.com'
    },
]
export const InfosGridAdmin = [
    {
        funcao: 'Pedidos',
        link: '/pedidos',
        icone: <FaRegListAlt />,
    },
    {
        funcao: 'Produtos',
        link: '/adprodutos',
        icone: <FaProductHunt />
    },
    {
        funcao: 'Meus Dados',
        link: '/meus-dados',
        icone: <FaRegUser />
    },
]

export const InfosGrid = [
    {
        funcao: 'Meus Pedidos',
        link: '/meus-pedidos',
        icone: <FaRegListAlt />,
    },
    {
        funcao: 'Meus Favoritos',
        link: '/meus-favoritos',
        icone: <FaRegHeart />
    },
    {
        funcao: 'Meus Dados',
        link: '/meus-dados',
        icone: <FaRegUser />
    },
    {
        funcao: 'Sair',
        link: '/login',
        icone: <ImExit />,
        isLogout: true,
    },
]
export const infosUserData = () => {
    const { user } = useAuth();
    if (!user || !user.user) return [];

    return [
        {
            campo: user.user.user_nome,
            valor: user.user.user_nome
        },
        {
            campo: user.user.user_email,
            valor: user.user.user_email
        },
    ];
};
export function handleInputEdit(inputEdit, setInputEdit) {
    return setInputEdit(!inputEdit);
}