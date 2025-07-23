import React from 'react'
import { SearchIpt, SearchWrapper } from '../navbar/NavbarStyles'

export default function BuscaProduto({ busca, setBusca }) {
    return (
        <SearchWrapper>
            <SearchIpt type="text" placeholder='ID, Nome ou Categoria do Produto' value={busca} onChange={(e) => setBusca(e.target.value)} style={{border: '1px solid #A63F2C', borderRadius: '8px'}} />
        </SearchWrapper>
    )
}
