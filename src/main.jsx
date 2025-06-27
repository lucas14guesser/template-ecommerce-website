import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/Router.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'
import Navbar from './components/layout/navbar/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Router />
    </BrowserRouter>
  </StrictMode>,
)
