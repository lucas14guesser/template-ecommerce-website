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
                            <LinkProd to={`/produtos/produto/${(produto.produto_id)}`}>
                                <ImgsCarousel src={produto.fotos[0].foto_produto_url} alt={produto.produto_nome} />

                                <p>{produto.produto_nome}</p>
                                {produto.oferta && produto.oferta.oferta_ativo ? (
                                    <NewPrice>
                                        <FontPreco style={{ textDecoration: 'line-through', color: 'gray' }}>
                                            R${precoFormat(produto.produto_preco)}
                                        </FontPreco>
                                        <FontPreco>R${precoFormat(produto.oferta.oferta_novo_preco)}</FontPreco>
                                    </NewPrice>
                                ) : (
                                    <FontPreco>R${precoFormat(produto.produto_preco)}</FontPreco>
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
