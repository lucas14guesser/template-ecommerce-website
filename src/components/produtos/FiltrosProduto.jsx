import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { findProdutoPorId, handleTamanhos } from './ProdutosServices';
import { BtnFilter, FilterList, InfosProd } from './ProdutosStyles';

export default function FiltrosProduto() {
    const { id } = useParams();
    const produto = findProdutoPorId(id);

    const [corSelecionada, setCorSelecionada] = useState(null);
    const [openTamanho, setOpenTamanho] = useState(false);
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);
    const [openQuantidade, setOpenQuantidade] = useState(false);

    return (
        <InfosProd>
            {produto.cores && (
                <FilterList>
                    {produto.cores.map((corItem, index) => (
                        <li key={index}>
                            <BtnFilter style={{ backgroundColor: corItem.cor }} onClick={() => handleTamanhos(corSelecionada, setCorSelecionada, index, openTamanho, setOpenTamanho)}></BtnFilter>
                            {openTamanho && corSelecionada === index && (
                                <FilterList>
                                    {corItem.tamanhos.map((tamanho, index) => (
                                        <li key={index}>
                                            <BtnFilter onClick={() => handleTamanhos(tamanhoSelecionado, setTamanhoSelecionado, index, openQuantidade, setOpenQuantidade)}>{tamanho.tamanho}</BtnFilter>
                                            {openQuantidade && tamanhoSelecionado === index && (
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
