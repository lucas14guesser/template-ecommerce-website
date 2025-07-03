import { FaRegListAlt, FaRegHeart, FaRegUser } from "react-icons/fa";

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
        valor: 'E-mail@email.com'
    },
]
export function handleInputEdit (inputEdit, setInputEdit) {
    return setInputEdit(!inputEdit);
}