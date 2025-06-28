import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/Router.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Router />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
