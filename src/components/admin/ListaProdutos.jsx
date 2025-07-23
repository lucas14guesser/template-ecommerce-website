import React, { useEffect, useState } from 'react';
import { getAllProdutos } from '../../api/GetMethods';
import { precoFormat } from '../home/HomeServices';
import { ListaWrapper, CardProduto, ImagemProduto, NomeProduto, Categoria, Preco, CoresWrapper, CorItem, CirculoCor, ListaTamanhos, NewPrice } from '../../styles/GlobalStyles';
import { filtroDeProdutos, functionPaginacao } from './AdminServices';
import Paginacao from '../../services/Paginacao';

export default function ListaProdutos({ busca }) {
    const [produtos, setProdutos] = useState([]);
    const [paginaAtual, setPaginaAtual] = useState(1);

    useEffect(() => {
        getAllProdutos(setProdutos);
    }, []);

    const produtosFiltrados = filtroDeProdutos(produtos || [], busca)
    const { produtosPaginados, totalPaginas } = functionPaginacao(paginaAtual, produtosFiltrados);

    return (
        <>
            <ListaWrapper>
                {produtosPaginados.map(produto => (
                    <CardProduto key={produto.produto_id}>
                        <Preco>Identificador: {produto.produto_id}</Preco>
                        <ImagemProduto
                            src={produto.fotos[0]?.foto_produto_url}
                            alt={produto.produto_nome}
                        />
                        <NomeProduto>{produto.produto_nome}</NomeProduto>
                        <Categoria>Categoria: {produto.categoria_nome}</Categoria>
                        <Categoria>Lançamento: {produto.produto_lancamento ? 'Sim' : 'Não'}</Categoria>
                        {produto.oferta.oferta_ativo ? (
                            <NewPrice>
                                <Preco style={{ textDecoration: 'line-through', color: 'gray' }}>R$ {precoFormat(produto.produto_preco)}</Preco>
                                <Preco>R$ {precoFormat(produto.oferta.oferta_novo_preco)}</Preco>
                            </NewPrice>
                        ) : (
                            <Preco>R$ {precoFormat(produto.produto_preco)}</Preco>
                        )}
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
            <Paginacao paginaAtual={paginaAtual} totalPaginas={totalPaginas} onAnterior={() => setPaginaAtual(p => Math.max(1, p - 1))} onProxima={() => setPaginaAtual(p => Math.min(totalPaginas, p + 1))} />
        </>
    );
}
