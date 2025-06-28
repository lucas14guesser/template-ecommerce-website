import React from 'react'
import { FaSearch } from "react-icons/fa";
import { BtnSearch, SearchIpt } from './NavbarStyles';

export default function SearchNav() {
  return (
        <div>
          <SearchIpt type="text" placeholder='Buscar' />
          <BtnSearch><FaSearch /></BtnSearch>
        </div>
  )
}
