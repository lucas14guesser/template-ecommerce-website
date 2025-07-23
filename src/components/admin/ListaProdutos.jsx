import React, { useEffect, useState } from 'react';
import { getAllProdutos } from '../../api/GetMethods';
import { precoFormat } from '../home/HomeServices';
import { ListaWrapper, CardProduto, ImagemProduto, NomeProduto, Categoria, Preco, CoresWrapper, CorItem, CirculoCor, ListaTamanhos } from '../../styles/GlobalStyles';
import { filtroDeProdutos } from './AdminServices';

export default function ListaProdutos({ busca }) {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        getAllProdutos(setProdutos);
    }, []);

    const produtosFiltrados = filtroDeProdutos(produtos || [], busca)

    return (
        <ListaWrapper>
            {produtosFiltrados.map(produto => (
                <CardProduto key={produto.produto_id}>
                    <ImagemProduto
                        src={produto.fotos[0]?.foto_url}
                        alt={produto.produto_nome}
                    />
                    <NomeProduto>{produto.produto_nome}</NomeProduto>
                    <Categoria>Categoria: {produto.categoria_nome}</Categoria>
                    <Categoria>Lançamento: {produto.produto_lancamento ? 'Sim' : 'Não'}</Categoria>
                    <Preco>R$ {precoFormat(produto.produto_preco)}</Preco>

                    <CoresWrapper>
                        <strong>Cores:</strong>
                        {produto.cores.map((cor, i) => (
                            <div key={i}>
                                <CorItem>
                                    <CirculoCor $cor={cor.cor_hex} />
                                    <span>{cor.cor_nome}</span>
                                </CorItem>
                                <ListaTamanhos>
                                    {cor.tamanhos.map((t, j) => (
                                        <li key={j}>
                                            {t.tamanho}: {t.quantidade} un.
                                        </li>
                                    ))}
                                </ListaTamanhos>
                            </div>
                        ))}
                    </CoresWrapper>
                </CardProduto>
            ))}
        </ListaWrapper>
    );
}
