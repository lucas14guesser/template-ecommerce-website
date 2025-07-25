import React from 'react'
import { BtnDefault, DivFlexColm, DivFlexRow } from '../../styles/GlobalStyles'
import { FaRegHeart, FaHeart } from "react-icons/fa";


export default function UserFuncoesProduto() {
    return (
        <DivFlexColm style={{padding: '0', marginTop: '1rem'}}>
            <BtnDefault style={{display: 'flex', alignItems: 'center', gap:'.3rem', justifyContent: 'center', backgroundColor: '#FFF', color: '#A63F2C', border: '1px solid #A63F2C'}}>
                <FaRegHeart style={{color: '#A63F2C'}} />
                Favoritos
            </BtnDefault>
            <BtnDefault>Adicionar ao Carrinho</BtnDefault>
        </DivFlexColm>
    )
}
