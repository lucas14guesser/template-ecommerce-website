export const listaPedidos = [
    {
        id: 1,
        user: 1,
        status: 'Finalizado',
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
    }
]
export function handleHiddenPedidos (hidden, setHidden) {
    return setHidden(!hidden)
}