import { useLocation } from 'react-router-dom';
import { urlFormat } from '../home/HomeServices';

export const todosProdutos = (produtos, categoria) => {
    return produtos.filter(produto => produto.categoria_nome === categoria);
}
export const lancamentos = (produtos) => {
    return produtos.filter(produto => produto.produto_lancamento === true);
}
export const ofertas = (produtos) => {
    return produtos.filter(produto => produto.oferta?.oferta_ativo === true);
}
export const favoritos = (produtos) => {
    return produtos.filter(produto => produto.favorito === true);
}
export const categoriasUnicas = (produtos) => {
    return [...new Set(produtos.map(produto => produto.categoria_nome).filter(Boolean))];
}
export function obterCategoriaSelecionada(categoriaURL, produtos) {
    if (!produtos || produtos.length === 0) return null;

    if (categoriaURL === 'lancamentos') {
        return {
            categoria: 'Lançamentos',
            produtos: lancamentos(produtos) || [],
        };
    }

    if (categoriaURL === 'ofertas') {
        return {
            categoria: 'Ofertas',
            produtos: ofertas(produtos) || [],
        };
    }

    const categoriasUnicasArray = categoriasUnicas(produtos);
    const nomeCategoria = categoriasUnicasArray.find(nome => urlFormat(nome) === categoriaURL);

    if (nomeCategoria) {
        return {
            categoria: nomeCategoria,
            produtos: todosProdutos(produtos, nomeCategoria) || [],
        };
    }

    return null;
}
export function useQuery() {
    return new URLSearchParams(useLocation().search)
}
const palavrasChaves = {
    oferta: ["oferta", "ofertas", "promo", "promoção", "promoções", "promocao", "promocoes", "promoçoes"],
    lancamento: ["lançamento", "lançamentos", "lancamento", "lancamentos"]
};
export const filtroDeProdutos = (produtos, busca) => {
    if (!Array.isArray(produtos)) return [];
    if (!busca || typeof busca !== 'string') return produtos;

    const termo = removerAcentos(busca.toLowerCase());

    if (palavrasChaves.oferta.some(p => removerAcentos(p) === termo)) {
        return produtos.filter(produto => produto.oferta?.oferta_ativo === true);
    }

    if (palavrasChaves.lancamento.some(p => removerAcentos(p) === termo)) {
        return produtos.filter(produto => produto.produto_lancamento === true);
    }

    return produtos.filter(produto => {
        const id = removerAcentos(String(produto.produto_id).toLowerCase());
        const nome = removerAcentos(produto.produto_nome.toLowerCase());
        const categoria = removerAcentos(produto.categoria_nome.toLowerCase());

        return id.includes(termo) || nome.includes(termo) || categoria.includes(termo);
    });
}
const removerAcentos = (txt) => {
    return txt.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
export function handleTamanhos(corSelecionada, setCorSelecionada, indexCor, openTamanho, setOpenTamanho) {
    if (corSelecionada === indexCor) {
        setOpenTamanho(!openTamanho)
    } else {
        setCorSelecionada(indexCor);
        setOpenTamanho(true)
    }
}
