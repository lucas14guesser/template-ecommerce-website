import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Title } from '../styles/GlobalStyles';
import { ProdutoC, ProdutoS, ProdutoSpecC } from '../components/produtos/ProdutosStyles';
import FotosProduto from '../components/produtos/FotosProduto';
import FiltrosProduto from '../components/produtos/FiltrosProduto';
import PrecoProduto from '../components/produtos/PrecoProduto';
import UserFuncoesProduto from '../components/produtos/UserFuncoesProduto';
import BtnVoltar from '../services/BtnVoltar';
import { getProdutoById } from '../api/GetMethods';
import NotFound from './NotFound';
import Loading from '../services/Loading';

export default function ProdutoEspecifico() {
    const { id } = useParams();
    const [produto, setProduto] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        getProdutoById(id, setProduto).finally(() => setloading(false));
    }, [id]);

    if (loading) return <Loading />

    if (!produto) return <NotFound />

    return (
        <Container>
            <BtnVoltar />
            <title>{produto.produto_nome}</title>
            <Title>Produto</Title>
            <ProdutoC>
                <ProdutoS>
                    <FotosProduto />
                    <ProdutoSpecC>
                        <Title style={{ textAlign: 'start' }}>{produto.produto_nome}</Title>
                        <PrecoProduto />
                        <ProdutoSpecC style={{gap: '0'}}>
                            <p>Cores</p>
                            <FiltrosProduto />
                        </ProdutoSpecC>
                        <UserFuncoesProduto />
                    </ProdutoSpecC>
                </ProdutoS>
            </ProdutoC>
            <p>AVALIAÇÕES</p>
        </Container>
    )
}
