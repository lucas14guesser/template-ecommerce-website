import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Produtos from '../pages/Produtos'

export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produtos/:categoria' element={<Produtos />} />
    </Routes>
  )
}
