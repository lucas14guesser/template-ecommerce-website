import React from 'react'
import { findProdutoPorId } from './ProdutosServices';
import { ImgPC, InfosProd, ProdutoImg } from './ProdutosStyles';
import { useParams } from 'react-router-dom';

export default function FotosProduto() {
    const { id } = useParams();
    const produto = findProdutoPorId(id);
    
    return (
        <InfosProd>
            <ImgPC>
                {produto.fotos.map((fotosItem, index) => (
                    <ProdutoImg
                        src={fotosItem.foto}
                        alt={produto.nome}
                        key={index}
                    />
                ))}
            </ImgPC>
        </InfosProd>
    )
}
