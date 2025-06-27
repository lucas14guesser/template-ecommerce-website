import React from 'react'
import { BtnSearch, SearchIpt } from '../../../styles/navbar/NavbarStyles'
import { FaSearch } from "react-icons/fa";

export default function SearchNav() {
  return (
        <div>
          <SearchIpt type="text" placeholder='Buscar' />
          <BtnSearch><FaSearch /></BtnSearch>
        </div>
  )
}
