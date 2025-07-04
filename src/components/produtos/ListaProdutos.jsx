import React from 'react'
import { BtnDefault, ContainerImgsCarousel, FontPreco, ImgsCarousel, LinkProd, NewPrice, Title } from '../../styles/GlobalStyles'
import { ProdutosC } from './ProdutosStyles'
import { precoFormat } from '../home/HomeServices'

export default function ListaProdutos({ categoria, produtos }) {
    return (
        <div>
            <Title>{categoria}</Title>
            <ProdutosC>
                {produtos.map((produto, index) => (
                    <div key={index}>
                        <ContainerImgsCarousel>
                            <LinkProd to={`/produtos/produto/${(produto.id)}`}>
                                <ImgsCarousel src={produto.fotos[0].foto} alt={produto.nome} />

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
                            </LinkProd>
                            <BtnDefault>Adicionar ao carrinho</BtnDefault>
                        </ContainerImgsCarousel>
                    </div>
                ))}
            </ProdutosC>
        </div>
    )
}
