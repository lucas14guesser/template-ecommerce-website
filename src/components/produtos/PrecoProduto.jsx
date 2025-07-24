import React, { useEffect, useState } from 'react'
import { InfosProd } from './ProdutosStyles';
import { FontPreco, NewPrice } from '../../styles/GlobalStyles';
import { precoFormat } from '../home/HomeServices';
import { useParams } from 'react-router-dom';
import { getProdutoById } from '../../api/GetMethods';
import NotFound from '../../pages/NotFound';
import Loading from '../../services/Loading';

export default function PrecoProduto() {
    const { id } = useParams();
    const [produto, setProduto] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProdutoById(id, setProduto).finally(() => setLoading(false));
    }, [id]);

    if (loading) return <Loading />

    if (!produto) return <NotFound />

    return (
        <InfosProd>
            {produto.oferta?.oferta_ativo ? (
                <NewPrice>
                    <FontPreco style={{ textDecoration: 'line-through', color: 'gray' }}>
                        R${precoFormat(produto.produto_preco)}
                    </FontPreco>
                    <FontPreco>R${precoFormat(produto.oferta?.oferta_novo_preco)}</FontPreco>
                </NewPrice>
            ) : (
                <FontPreco>R${precoFormat(produto.produto_preco)}</FontPreco>
            )}
        </InfosProd>
    )
}
