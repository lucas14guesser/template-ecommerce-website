import { FaRegListAlt, FaRegHeart, FaRegUser, FaProductHunt } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { useAuth } from "../context/AuthContext";
import { PutUserData } from "../../api/PutMethods";
import { toast } from "react-toastify";

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
    {
        funcao: 'Sair',
        link: '/login',
        icone: <ImExit />,
        isLogout: true,
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
export const infosUserData = (nomeUser, setNomeUser, enderecoUser, setEnderecoUser, telefoneUser, setTelefoneUser, cpfUser, setCPFUser, emailUser, setEmailUser) => {
    const { user } = useAuth();
    if (!user || !user.user) return [];

    return [
        {
            campo: user.user.user_nome,
            valor: user.user.user_nome,
            placeholder: 'Nome completo',
            getter: nomeUser,
            change: setNomeUser
        },
        {
            campo: user.user.user_endereco,
            valor: user.user.user_endereco,
            placeholder: 'Endereço completo (ex: Rua, Nº, Bairro, Cidade, UF)',
            getter: enderecoUser,
            change: setEnderecoUser
        },
        {
            campo: user.user.user_telefone,
            valor: user.user.user_telefone,
            placeholder: 'Celular com DDD',
            getter: telefoneUser,
            change: setTelefoneUser
        },
        {
            campo: user.user.user_cpf,
            valor: user.user.user_cpf,
            placeholder: 'CPF',
            getter: cpfUser,
            change: setCPFUser
        },
        {
            campo: user.user.user_email,
            valor: user.user.user_email,
            placeholder: 'E-mail',
            getter: emailUser,
            change: setEmailUser,
            isDisable: true
        },
    ];
};

export const handleEdit = async (nomeUser, endereco_user, telefone_user, cpf_user, user_id, token, logout, e) => {
    e.preventDefault();

    await PutUserData(nomeUser, endereco_user, telefone_user, cpf_user, user_id, token);

    toast.info('Por segurança, você será desconectado.');

    setTimeout(() => {
        logout();

        window.location.href = '/login';
    }, 5000);
};