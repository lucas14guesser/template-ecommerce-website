import React from 'react'
import { BtnDefault, ContainerImgsCarousel, FontPreco, ImgsCarousel, NewPrice, Title } from '../../styles/GlobalStyles'
import { ProdutosC } from './ProdutosStyles'
import { Link } from 'react-router-dom'
import { precoFormat, urlFormat } from '../home/HomeServices'

export default function ListaProdutos({ categoria, produtos }) {
    return (
        <div>
            <Title>{categoria}</Title>
            <ProdutosC>
                {produtos.map((produto, index) => (
                    <div key={index}>
                        <ContainerImgsCarousel>
                            <Link to={urlFormat(produto.nome)}>
                                <ImgsCarousel src={produto.fotos[0].foto} alt={produto.nome} />
                            </Link>
                            <p>{produto.nome}</p>
                            {produto.ofertas && produto.ofertas[0]?.oferta ? (
                                <NewPrice>
                                    <FontPreco style={{ textDecoration: 'line-through', color: 'gray' }}>
                                        R${precoFormat(produto.preco)}
                                    </FontPreco>
                                    <FontPreco>R${precoFormat(produto.ofertas[0].novoPreco)}</FontPreco>
                                </NewPrice>
                            ) : (
                                <FontPreco>R${precoFormat(produto.preco)}</FontPreco>
                            )}

                            <BtnDefault>Adicionar ao carrinho</BtnDefault>
                        </ContainerImgsCarousel>
                    </div>
                ))}
            </ProdutosC>
        </div>
    )
}
