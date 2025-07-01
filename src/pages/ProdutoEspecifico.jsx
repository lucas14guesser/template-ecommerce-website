import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { findProdutoPorId, handleTamanhos } from '../components/produtos/ProdutosServices';
import { BtnDefault, Container, DivFlexRow, FontPreco, NewPrice, Title } from '../styles/GlobalStyles';
import { BtnFilter, FilterList, ImgPC, InfosProd, ProdutoC, ProdutoImg, ProdutoS } from '../components/produtos/ProdutosStyles';
import { precoFormat } from '../components/home/HomeServices';
import FotosProduto from '../components/produtos/FotosProduto';
import FiltrosProduto from '../components/produtos/FiltrosProduto';
import PrecoProduto from '../components/produtos/PrecoProduto';
import UserFuncoesProduto from '../components/produtos/UserFuncoesProduto';

export default function ProdutoEspecifico() {
    const { id } = useParams();
    const produto = findProdutoPorId(id);

    if (!produto) {
        return <div>Produto não encontrado.</div>
    }
    return (
        <Container>
            <title>{produto.nome}</title>
            <Title>Produto</Title>
            <ProdutoC>
                <Title>{produto.nome}</Title>
                <ProdutoS>
                    <FotosProduto />
                    <FiltrosProduto />
                </ProdutoS>

                <ProdutoS>
                    <PrecoProduto />
                    <UserFuncoesProduto />
                </ProdutoS>
            </ProdutoC>

        </Container>
    )
}