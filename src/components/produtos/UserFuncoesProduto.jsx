import React from 'react'
import { InfosProd } from './ProdutosStyles'
import { BtnDefault, DivFlexRow } from '../../styles/GlobalStyles'

export default function UserFuncoesProduto() {
    return (
        <InfosProd>
            <DivFlexRow>
                <BtnDefault>Favoritos</BtnDefault>
                <BtnDefault>Adicionar ao Carrinho</BtnDefault>
            </DivFlexRow>
        </InfosProd>
    )
}
