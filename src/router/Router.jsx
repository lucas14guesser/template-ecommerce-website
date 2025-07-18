import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeList } from './RouterServices'
import { AuthProvider } from '../components/context/AuthContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './PrivateRoute';

export default function Router() {
  return (
    <AuthProvider>
      <ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} newestOnTop={true} closeOnClick pauseOnFocusLoss draggable theme='light' />
      <Routes>
        {routeList.map((rota, index) => {
          const element = rota.isPrivate ? <PrivateRoute>{rota.componente}</PrivateRoute> : rota.componente;

          return (
            <Route key={index} path={rota.caminho} element={element} />
          )
        })}
      </Routes>
    </AuthProvider>
  )
}
