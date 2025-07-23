import React from 'react'
import { BtnSearch, SearchIpt, SearchWrapper } from '../navbar/NavbarStyles'
import { FaSearch } from 'react-icons/fa'

export default function BuscaProduto({ busca, setBusca }) {
    return (
        <SearchWrapper>
            <SearchIpt type="text" placeholder='Nome ou Categoria do Produto' value={busca} onChange={(e) => setBusca(e.target.value)} style={{border: '1px solid #A63F2C', borderRadius: '8px'}} />
        </SearchWrapper>
    )
}
