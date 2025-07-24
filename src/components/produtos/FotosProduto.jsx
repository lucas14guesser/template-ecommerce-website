import React, { useEffect, useState } from 'react'
import { ImgPC, InfosProd, ProdutoImg } from './ProdutosStyles';
import { useParams } from 'react-router-dom';
import { getProdutoById } from '../../api/GetMethods';
import NotFound from '../../pages/NotFound';
import Loading from '../../services/Loading';

export default function FotosProduto() {
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
            <ImgPC>
                <ProdutoImg
                    src={produto.fotos?.[0]?.foto_produto_url}
                    alt={produto.produto_nome}
                />
            </ImgPC>
        </InfosProd>
    )
}
