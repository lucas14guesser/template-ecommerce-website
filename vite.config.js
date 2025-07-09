import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, './src/pages/Home.jsx'),
        produtos: resolve(__dirname, './src/pages/Produtos.jsx'),
        login: resolve(__dirname, './src/pages/Login.jsx'),
        cadastro: resolve(__dirname, './src/pages/Cadastro.jsx'),
        minhaConta: resolve(__dirname, './src/pages/MinhaConta.jsx'),
        produtoEspecifico: resolve(__dirname, './src/pages/ProdutoEspecifico.jsx'),
        segurancaPrivacidade: resolve(__dirname, './src/pages/SegurancaEPrivacidade.jsx'),
        userData: resolve(__dirname, './src/pages/UserData.jsx'),
        favoritos: resolve(__dirname, './src/pages/Favoritos.jsx'),
        pedidos: resolve(__dirname, './src/pages/Pedidos.jsx'),
        carrinho: resolve(__dirname, './src/pages/Carrinho.jsx'),
      }
    }
  }
})