import React from 'react'
import { InfosProd } from './ProdutosStyles';
import { FontPreco, NewPrice } from '../../styles/GlobalStyles';
import { precoFormat } from '../home/HomeServices';
import { useParams } from 'react-router-dom';
import { findProdutoPorId } from './ProdutosServices';

export default function PrecoProduto() {
    const { id } = useParams();
    const produto = findProdutoPorId(id);

    return (
        <InfosProd>
            {produto.ofertas && produto.ofertas[0]?.oferta ? (
                <NewPrice>
                    <FontPreco style={{ textDecoration: 'line-through', color: 'gray' }}>
                        R${precoFormat(produto.preco)}
                    </FontPreco>
                    <FontPreco>R${precoFormat(produto.ofertas[0].novoPreco)}</FontPreco>
                </NewPrice>
            ) : (
                <FontPreco>R${precoFormat(produto.preco)}</FontPreco>
            )}
        </InfosProd>
    )
}
