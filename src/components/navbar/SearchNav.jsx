import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { BtnSearch, SearchIpt, SearchWrapper } from './NavbarStyles';
import { useNavigate } from 'react-router-dom';
import { handleSearchSubmit } from './NavbarServices';

export default function SearchNav() {
  const [busca, setBusca] = useState('');
  const navigate = useNavigate();

  return (
    <SearchWrapper onSubmit={(e) => handleSearchSubmit(e, busca, navigate, '/buscar?query=')}>
      <SearchIpt type="text" placeholder='Buscar' value={busca} onChange={(e) => setBusca(e.target.value)} />
      <BtnSearch type='submit'><FaSearch /></BtnSearch>
    </SearchWrapper>
  )
}
