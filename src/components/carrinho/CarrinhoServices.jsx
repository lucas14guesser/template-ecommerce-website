export const produtosCarrinho = [
    {
        id: 1,
        user: 1,
        quantidade: 1,
        produtos: [
            {
                id: 12,
                nome: "Shorts Teste 1",
                fotos: [
                    { foto: "/assets/roupas/shorts-teste-1.png" },
                    { foto: "/assets/roupas/shorts-teste-2.png" },
                    { foto: "/assets/roupas/shorts-teste-2.png" },
                    { foto: "/assets/roupas/shorts-teste-2.png" },
                    { foto: "/assets/roupas/shorts-teste-2.png" },
                    { foto: "/assets/roupas/shorts-teste-2.png" }
                ],
                preco: 49.90,
                cores: [
                    {
                        cor: "#000000",
                        tamanhos: [
                            { tamanho: "P" },
                        ]
                    }
                ],
                lancamento: true,
            },
        ]
    },
    {
        id: 2,
        user: 1,
        quantidade: 1,
        produtos: [
            {
                id: 10,
                nome: "Sapato Teste 1",
                fotos: [
                    { foto: "/assets/roupas/sapato-teste-1.png" }
                ],
                preco: 109.90,
                cores: [
                    {
                        cor: "branco",
                        tamanhos: [
                            { tamanho: "36" },
                        ]
                    }
                ],
                lancamento: true,
                favorito: true,
            },
        ]
    },
]

export const subtotal = produtosCarrinho.reduce((acc, p) => acc + p.produtos[0].preco * p.quantidade, 0).toFixed(2)
