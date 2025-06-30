import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeList } from './RouterServices'

export default function Router() {
  return (
    <Routes>
        {routeList.map((rota, index) => (
            <Route key={index} path={rota.caminho} element={rota.componente}/>
        ))}
    </Routes>
  )
}
