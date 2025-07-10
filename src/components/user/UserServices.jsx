import { FaRegListAlt, FaRegHeart, FaRegUser, FaProductHunt } from "react-icons/fa";

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
        link: '/produtos',
        icone: <FaProductHunt />
    },
    {
        funcao: 'Meus Dados',
        link: '/meus-dados',
        icone: <FaRegUser />
    },
]
export const users = [
    {
        id: 1,
        nome: 'User',
        email: 'email@email.com'
    }
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
]
export const infosUserData = [
    {
        campo: 'nome',
        valor: 'User'
    },
    {
        campo: 'email',
        valor: 'email@email.com'
    },
]
export function handleInputEdit (inputEdit, setInputEdit) {
    return setInputEdit(!inputEdit);
}