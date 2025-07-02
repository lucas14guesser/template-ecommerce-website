import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const LinksCategoria = [
    {
        nome: "Ofertas",
        link: "/produtos/ofertas"
    },
    {
        nome: "Lançamentos",
        link: "/produtos/lancamentos"
    },
    {
        nome: "Blusas",
        link: "/produtos/blusas"
    },
    {
        nome: "Vestidos",
        link: "/produtos/vestidos"
    },
    {
        nome: "Jaquetas",
        link: "/produtos/jaquetas"
    },
    {
        nome: "Calças",
        link: "/produtos/calcas"
    },
    {
        nome: "Shorts",
        link: "/produtos/shorts"
    },
    {
        nome: "Saias",
        link: "/produtos/saias"
    },
    {
        nome: "Sapatos",
        link: "/produtos/sapatos"
    },
    {
        nome: "Acessórios",
        link: "/produtos/acessorios"
    },
]

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}