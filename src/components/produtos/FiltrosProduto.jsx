import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { handleTamanhos } from './ProdutosServices';
import { BtnFilter, FilterList, InfosProd } from './ProdutosStyles';
import { getProdutoById } from '../../api/GetMethods';
import NotFound from '../../pages/NotFound';
import Loading from '../../services/Loading';

export default function FiltrosProduto() {
    const { id } = useParams();
    const [produto, setProduto] = useState({});
    const [loading, setLoading] = useState(true);

    const [corSelecionada, setCorSelecionada] = useState(null);
    const [openTamanho, setOpenTamanho] = useState(false);
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);
    const [openQuantidade, setOpenQuantidade] = useState(false);

    useEffect(() => {
        getProdutoById(id, setProduto).finally(() => setLoading(false));
    }, [id]);

    if (loading) return <Loading />

    if (!produto) return <NotFound />

    return (
        <InfosProd>
            {produto.cores && (
                <FilterList>
                    {produto.cores.map((corItem, indexCor) => (
                        <li key={indexCor}>
                            <BtnFilter style={{ backgroundColor: corItem.cor_hex }} onClick={() => handleTamanhos(corSelecionada, setCorSelecionada, indexCor, openTamanho, setOpenTamanho)}></BtnFilter>
                            {openTamanho && corSelecionada === indexCor && (
                                <FilterList>
                                    {corItem.tamanhos.map((tamanho, indexTam) => (
                                        <li key={indexTam}>
                                            <BtnFilter onClick={() => handleTamanhos(tamanhoSelecionado, setTamanhoSelecionado, indexTam, openQuantidade, setOpenQuantidade)}>{tamanho.tamanho}</BtnFilter>
                                            {openQuantidade && tamanhoSelecionado === indexTam && (
                                                <p>Quantidade Restante: {tamanho.quantidade}</p>
                                            )}
                                        </li>
                                    ))}
                                </FilterList>
                            )}
                        </li>
                    ))}
                </FilterList>
            )}
        </InfosProd>
    )
}
