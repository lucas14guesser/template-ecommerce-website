import React from 'react'
import { BtnSearch, SearchIpt, SearchWrapper } from '../navbar/NavbarStyles'
import { FaSearch } from 'react-icons/fa'

export default function BuscaProduto({ busca, setBusca }) {
    return (
        <SearchWrapper>
            <SearchIpt type="text" placeholder='Buscar' value={busca} onChange={(e) => setBusca(e.target.value)} style={{borderColor: '#A63F2C'}} />
            <BtnSearch type='submit' style={{backgroundColor: '#A63F2C', borderColor: '#A63F2C'}}><FaSearch /></BtnSearch>
        </SearchWrapper>
    )
}
