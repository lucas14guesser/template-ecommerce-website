import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaUser , FaShoppingCart } from "react-icons/fa";

export const SocialLinksNav = [
    {
        icone: <FaFacebook />,
        link: "https://www.facebook.com/"
    },
    {
        icone: <FaTwitter />,
        link: "https://x.com/"
    },
    {
        icone: <FaInstagram />,
        link: "https://www.instagram.com/"
    },
    {
        icone: <FaPinterest />,
        link: "https://br.pinterest.com/"
    },
]
export const LinkHome = [
    {
        nome: "Loja Virtual",
        link: "/"
    }
]
export const UserLinks = [
    {
        icon: <FaUser />,
        nome: "Minha Conta",
        link: "/minha-conta"
    },
    {
        icon: <FaShoppingCart />,
        nome: "Meu Carrinho",
        link: "/meu-carrinho"
    },
]
export function toggleMenuHamburguer (Menu, setMenu) {
    return setMenu(!Menu); 
}
export function handleSearchSubmit (e, busca, navigate, urlQuery) {
    e.preventDefault();

    if(busca.trim()) {
        navigate(`${urlQuery}${encodeURIComponent(busca.trim())}`)
    }
}