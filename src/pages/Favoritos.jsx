import React from 'react'
import { Container, Title } from '../styles/GlobalStyles'
import ListaProdutos from '../components/produtos/ListaProdutos'
import { favoritos } from '../components/produtos/ProdutosServices'

export default function Favoritos() {
    return (
        <>
            <title>Meus Favoritos</title>
            <Container>
                {favoritos.length > 0 && (
                    <ListaProdutos
                        categoria={"Meus Favoritos"}
                        produtos={favoritos}
                    />
                )}
            </Container>
        </>
    )
}
