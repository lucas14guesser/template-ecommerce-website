import { urlFormat } from '../home/HomeServices';

export const categoriasProdutos = [
    {
        categoria: "Blusas",
        produtos: [
            {
                id: 1,
                nome: "Blusa Teste 1",
                fotos: [
                    { foto: "/assets/roupas/blusa-teste-1.png" }
                ],
                cores: [
                    {
                        cor: "laranja",
                        tamanhos: [
                            { tamanho: "P", quantidade: 3 },
                            { tamanho: "M", quantidade: 2 }
                        ]
                    }
                ],
                preco: 49.90,
                lancamento: true,
            },
            {
                id: 2,
                nome: "Blusa Teste 2",
                fotos: [
                    { foto: "/assets/roupas/blusa-teste-2.png" }
                ],
                cores: [
                    {
                        cor: "vermelho",
                        tamanhos: [
                            { tamanho: "P", quantidade: 5 },
                            { tamanho: "M", quantidade: 1 }
                        ]
                    }
                ],
                preco: 69.90,
                lancamento: true,
            },
            {
                id: 18,
                nome: "Blusa Teste 3",
                fotos: [
                    { foto: "/assets/roupas/blusa-teste-3.png" }
                ],
                preco: 19.90,
            },
            {
                id: 19,
                nome: "Blusa Teste 4",
                fotos: [
                    { foto: "/assets/roupas/blusa-teste-4.png" }
                ],
                preco: 29.90,
            },
            {
                id: 20,
                nome: "Blusa Teste 5",
                fotos: [
                    { foto: "/assets/roupas/blusa-teste-5.png" }
                ],
                preco: 89.90,
            },
            {
                id: 21,
                nome: "Blusa Teste 6",
                fotos: [
                    { foto: "/assets/roupas/blusa-teste-6.png" }
                ],
                preco: 49.90,
            },
            {
                id: 22,
                nome: "Blusa Teste 7",
                fotos: [
                    { foto: "/assets/roupas/blusa-teste-7.png" }
                ],
                preco: 49.90,
            },
            {
                id: 23,
                nome: "Blusa Teste 8",
                fotos: [
                    { foto: "/assets/roupas/blusa-teste-8.png" }
                ],
                preco: 59.90,
            },
            {
                id: 24,
                nome: "Blusa Teste 9",
                fotos: [
                    { foto: "/assets/roupas/blusa-teste-9.png" }
                ],
                preco: 89.90,
            },
            {
                id: 25,
                nome: "Blusa Teste 10",
                fotos: [
                    { foto: "/assets/roupas/blusa-teste-10.png" }
                ],
                preco: 29.90,
            }
        ]
    },
    {
        categoria: "Vestidos",
        produtos: [
            {
                id: 14,
                nome: "Vestido Teste 1",
                fotos: [
                    { foto: "/assets/roupas/vestido-teste-1.png" }
                ],
                preco: 109.90,
                cores: [
                    {
                        cor: "verde",
                        tamanhos: [
                            { tamanho: "P", quantidade: 2 },
                            { tamanho: "M", quantidade: 5 },
                        ]
                    }
                ],
                lancamento: true,
            },
            {
                id: 15,
                nome: "Vestido Teste 2",
                fotos: [
                    { foto: "/assets/roupas/vestido-teste-2.png" }
                ],
                preco: 89.90,
                cores: [
                    {
                        cor: "rosa",
                        tamanhos: [
                            { tamanho: "P", quantidade: 6 },
                            { tamanho: "M", quantidade: 1 },
                        ]
                    }
                ],
                lancamento: true,
            },
            {
                id: 28,
                nome: "Vestido Teste 3",
                fotos: [
                    { foto: "/assets/roupas/vestido-teste-3.png" }
                ],
                preco: 39.90,
            },
            {
                id: 29,
                nome: "Vestido Teste 4",
                fotos: [
                    { foto: "/assets/roupas/vestido-teste-4.png" }
                ],
                preco: 49.90,
            },
            {
                id: 30,
                nome: "Vestido Teste 5",
                fotos: [
                    { foto: "/assets/roupas/vestido-teste-5.png" }
                ],
                preco: 69.90,
            },
            {
                id: 31,
                nome: "Vestido Teste 6",
                fotos: [
                    { foto: "/assets/roupas/vestido-teste-6.png" }
                ],
                preco: 89.90,
                ofertas: [
                    { oferta: true, novoPreco: 39.90 }
                ]
            },
            {
                id: 32,
                nome: "Vestido Teste 7",
                fotos: [
                    { foto: "/assets/roupas/vestido-teste-7.png" }
                ],
                preco: 89.90,
            },
            {
                id: 33,
                nome: "Vestido Teste 8",
                fotos: [
                    { foto: "/assets/roupas/vestido-teste-8.png" }
                ],
                preco: 199.90,
            },
            {
                id: 34,
                nome: "Vestido Teste 9",
                fotos: [
                    { foto: "/assets/roupas/vestido-teste-9.png" }
                ],
                preco: 99.90,
            },
            {
                id: 35,
                nome: "Vestido Teste 10",
                fotos: [
                    { foto: "/assets/roupas/vestido-teste-10.png" }
                ],
                preco: 69.90,
            }
        ]
    },
    {
        categoria: "Jaquetas",
        produtos: [
            {
                id: 6,
                nome: "Jaqueta Teste 1",
                fotos: [
                    { foto: "/assets/roupas/jaqueta-teste-1.png" }
                ],
                preco: 49.90,
                cores: [
                    {
                        cor: "azul",
                        tamanhos: [
                            { tamanho: "P", quantidade: 10 },
                            { tamanho: "M", quantidade: 1 },
                        ]
                    }
                ],
                lancamento: true,
            },
            {
                id: 7,
                nome: "Jaqueta Teste 2",
                fotos: [
                    { foto: "/assets/roupas/jaqueta-teste-2.png" }
                ],
                preco: 49.90,
                cores: [
                    {
                        cor: "azul",
                        tamanhos: [
                            { tamanho: "P", quantidade: 13 },
                            { tamanho: "M", quantidade: 3 },
                        ]
                    }
                ],
                lancamento: true,
            },
            {
                id: 38,
                nome: "Jaqueta Teste 3",
                fotos: [
                    { foto: "/assets/roupas/jaqueta-teste-3.png" }
                ],
                preco: 79.90,
            },
            {
                id: 39,
                nome: "Jaqueta Teste 4",
                fotos: [
                    { foto: "/assets/roupas/jaqueta-teste-4.png" }
                ],
                preco: 69.90,
            },
            {
                id: 40,
                nome: "Jaqueta Teste 5",
                fotos: [
                    { foto: "/assets/roupas/jaqueta-teste-5.png" }
                ],
                preco: 89.90,
            },
            {
                id: 41,
                nome: "Jaqueta Teste 6",
                fotos: [
                    { foto: "/assets/roupas/jaqueta-teste-6.png" }
                ],
                preco: 99.90,
            },
            {
                id: 42,
                nome: "Jaqueta Teste 7",
                fotos: [
                    { foto: "/assets/roupas/jaqueta-teste-7.png" }
                ],
                preco: 39.90,
            },
            {
                id: 43,
                nome: "Jaqueta Teste 8",
                fotos: [
                    { foto: "/assets/roupas/jaqueta-teste-8.png" }
                ],
                preco: 69.90,
            },
            {
                id: 44,
                nome: "Jaqueta Teste 9",
                fotos: [
                    { foto: "/assets/roupas/jaqueta-teste-9.png" }
                ],
                preco: 59.90,
            },
            {
                id: 45,
                nome: "Jaqueta Teste 10",
                fotos: [
                    { foto: "/assets/roupas/jaqueta-teste-10.png" }
                ],
                preco: 49.90,
            }
        ]
    },
    {
        categoria: "Calças",
        produtos: [
            {
                id: 4,
                nome: "Calças Teste 1",
                fotos: [
                    { foto: "/assets/roupas/calcas-teste-1.png" }
                ],
                preco: 39.90,
                cores: [
                    {
                        cor: "cinza",
                        tamanhos: [
                            { tamanho: "38", quantidade: 10 },
                            { tamanho: "40", quantidade: 3 },
                        ]
                    }
                ],
                lancamento: true,
            },
            {
                id: 5,
                nome: "Calças Teste 2",
                fotos: [
                    { foto: "/assets/roupas/calcas-teste-2.png" }
                ],
                preco: 29.90,
                cores: [
                    {
                        cor: "verde",
                        tamanhos: [
                            { tamanho: "38", quantidade: 1 },
                            { tamanho: "40", quantidade: 3 },
                        ]
                    }
                ],
                lancamento: true,
            },
            {
                id: 48,
                nome: "Calças Teste 3",
                fotos: [
                    { foto: "/assets/roupas/calcas-teste-3.png" }
                ],
                preco: 79.90,
            },
            {
                id: 49,
                nome: "Calças Teste 4",
                fotos: [
                    { foto: "/assets/roupas/calcas-teste-4.png" }
                ],
                preco: 69.90,
            },
            {
                id: 50,
                nome: "Calças Teste 5",
                fotos: [
                    { foto: "/assets/roupas/calcas-teste-5.png" }
                ],
                preco: 59.90,
            },
            {
                id: 51,
                nome: "Calças Teste 6",
                fotos: [
                    { foto: "/assets/roupas/calcas-teste-6.png" }
                ],
                preco: 49.90,
            },
            {
                id: 52,
                nome: "Calças Teste 7",
                fotos: [
                    { foto: "/assets/roupas/calcas-teste-7.png" }
                ],
                preco: 39.90,
            },
            {
                id: 53,
                nome: "Calças Teste 8",
                fotos: [
                    { foto: "/assets/roupas/calcas-teste-8.png" }
                ],
                preco: 99.90,
            },
            {
                id: 54,
                nome: "Calças Teste 9",
                fotos: [
                    { foto: "/assets/roupas/calcas-teste-9.png" }
                ],
                preco: 69.90,
            },
            {
                id: 55,
                nome: "Calças Teste 10",
                fotos: [
                    { foto: "/assets/roupas/calcas-teste-10.png" }
                ],
                preco: 29.90,
            }
        ]
    },
    {
        categoria: "Shorts",
        produtos: [
            {
                id: 12,
                nome: "Shorts Teste 1",
                fotos: [
                    { foto: "/assets/roupas/shorts-teste-1.png" }
                ],
                preco: 49.90,
                cores: [
                    {
                        cor: "verde",
                        tamanhos: [
                            { tamanho: "P", quantidade: 2 },
                        ]
                    },
                    {
                        cor: "preto",
                        tamanhos: [
                            { tamanho: "P", quantidade: 3 },
                        ]
                    },
                    {
                        cor: "rosa",
                        tamanhos: [
                            { tamanho: "P", quantidade: 1 },
                        ]
                    },
                    {
                        cor: "amarelo",
                        tamanhos: [
                            { tamanho: "P", quantidade: 7 },
                        ]
                    }
                ],
                lancamento: true,
            },
            {
                id: 13,
                nome: "Shorts Teste 2",
                fotos: [
                    { foto: "/assets/roupas/shorts-teste-2.png" }
                ],
                preco: 42.90,
                cores: [
                    {
                        cor: "rosa",
                        tamanhos: [
                            { tamanho: "P", quantidade: 1 },
                            { tamanho: "M", quantidade: 1 },
                        ]
                    },
                    {
                        cor: "amarelo",
                        tamanhos: [
                            { tamanho: "P", quantidade: 7 },
                            { tamanho: "M", quantidade: 2 },
                        ]
                    }
                ],
                lancamento: true,
            },
            {
                id: 58,
                nome: "Shorts Teste 3",
                fotos: [
                    { foto: "/assets/roupas/shorts-teste-3.png" }
                ],
                preco: 41.90,
            },
            {
                id: 59,
                nome: "Shorts Teste 4",
                fotos: [
                    { foto: "/assets/roupas/shorts-teste-4.png" }
                ],
                preco: 59.90,
            },
            {
                id: 60,
                nome: "Shorts Teste 5",
                fotos: [
                    { foto: "/assets/roupas/shorts-teste-5.png" }
                ],
                preco: 79.90,
            },
            {
                id: 61,
                nome: "Shorts Teste 6",
                fotos: [
                    { foto: "/assets/roupas/shorts-teste-6.png" }
                ],
                preco: 49.90,
            },
            {
                id: 62,
                nome: "Shorts Teste 7",
                fotos: [
                    { foto: "/assets/roupas/shorts-teste-7.png" }
                ],
                preco: 79.90,
            },
            {
                id: 63,
                nome: "Shorts Teste 8",
                fotos: [
                    { foto: "/assets/roupas/shorts-teste-8.png" }
                ],
                preco: 89.90,
            },
            {
                id: 64,
                nome: "Shorts Teste 9",
                fotos: [
                    { foto: "/assets/roupas/shorts-teste-9.png" }
                ],
                preco: 69.90,
            },
            {
                id: 65,
                nome: "Shorts Teste 10",
                fotos: [
                    { foto: "/assets/roupas/shorts-teste-10.png" }
                ],
                preco: 19.90,
            }
        ]
    },
    {
        categoria: "Saias",
        produtos: [
            {
                id: 8,
                nome: "Saia Teste 1",
                fotos: [
                    { foto: "/assets/roupas/saia-teste-1.png" }
                ],
                preco: 19.90,
                cores: [
                    {
                        cor: "branco",
                        tamanhos: [
                            { tamanho: "P", quantidade: 5 }
                        ]
                    }
                ],
                lancamento: true,
            },
            {
                id: 9,
                nome: "Saia Teste 2",
                fotos: [
                    { foto: "/assets/roupas/saia-teste-2.png" }
                ],
                preco: 39.90,
                cores: [
                    {
                        cor: "preto",
                        tamanhos: [
                            { tamanho: "P", quantidade: 7 },
                            { tamanho: "M", quantidade: 1 },
                        ]
                    }
                ],
                lancamento: true,
            },
            {
                id: 68,
                nome: "Saia Teste 3",
                fotos: [
                    { foto: "/assets/roupas/saia-teste-3.png" }
                ],
                preco: 29.90,
            },
            {
                id: 69,
                nome: "Saia Teste 4",
                fotos: [
                    { foto: "/assets/roupas/saia-teste-4.png" }
                ],
                preco: 49.90,
            },
            {
                id: 70,
                nome: "Saia Teste 5",
                fotos: [
                    { foto: "/assets/roupas/saia-teste-5.png" }
                ],
                preco: 69.90,
                ofertas: [
                    { oferta: true, novoPreco: 19.90 }
                ]
            },
            {
                id: 71,
                nome: "Saia Teste 6",
                fotos: [
                    { foto: "/assets/roupas/saia-teste-6.png" }
                ],
                preco: 39.90,
            },
            {
                id: 72,
                nome: "Saia Teste 7",
                fotos: [
                    { foto: "/assets/roupas/saia-teste-7.png" }
                ],
                preco: 19.90,
            },
            {
                id: 73,
                nome: "Saia Teste 8",
                fotos: [
                    { foto: "/assets/roupas/saia-teste-8.png" }
                ],
                preco: 89.90,
            },
            {
                id: 74,
                nome: "Saia Teste 9",
                fotos: [
                    { foto: "/assets/roupas/saia-teste-9.png" }
                ],
                preco: 79.90,
            },
            {
                id: 75,
                nome: "Saia Teste 10",
                fotos: [
                    { foto: "/assets/roupas/saia-teste-10.png" }
                ],
                preco: 39.90,
            }
        ]
    },
    {
        categoria: "Sapatos",
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
                            { tamanho: "36", quantidade: 7 },
                        ]
                    }
                ],
                lancamento: true,
            },
            {
                id: 11,
                nome: "Sapato Teste 2",
                fotos: [
                    { foto: "/assets/roupas/sapato-teste-2.png" }
                ],
                preco: 129.90,
                ofertas: [
                    { oferta: true, novoPreco: 99.90 }
                ],
                cores: [
                    {
                        cor: "rosa",
                        tamanhos: [
                            { tamanho: "36", quantidade: 2 },
                        ]
                    }
                ],
                lancamento: true,
            },
            {
                id: 78,
                nome: "Sapato Teste 3",
                fotos: [
                    { foto: "/assets/roupas/sapato-teste-3.png" }
                ],
                preco: 249.90,
            },
            {
                id: 79,
                nome: "Sapato Teste 4",
                fotos: [
                    { foto: "/assets/roupas/sapato-teste-4.png" }
                ],
                preco: 249.90,
            },
            {
                id: 80,
                nome: "Sapato Teste 5",
                fotos: [
                    { foto: "/assets/roupas/sapato-teste-5.png" }
                ],
                preco: 149.90,
            },
            {
                id: 81,
                nome: "Sapato Teste 6",
                fotos: [
                    { foto: "/assets/roupas/sapato-teste-6.png" }
                ],
                preco: 129.90,
            },
            {
                id: 82,
                nome: "Sapato Teste 7",
                fotos: [
                    { foto: "/assets/roupas/sapato-teste-7.png" }
                ],
                preco: 159.90,
            },
            {
                id: 83,
                nome: "Sapato Teste 8",
                fotos: [
                    { foto: "/assets/roupas/sapato-teste-8.png" }
                ],
                preco: 189.90,
            },
            {
                id: 84,
                nome: "Sapato Teste 9",
                fotos: [
                    { foto: "/assets/roupas/sapato-teste-9.png" }
                ],
                preco: 159.90,
            },
            {
                id: 85,
                nome: "Sapato Teste 10",
                fotos: [
                    { foto: "/assets/roupas/sapato-teste-10.png" }
                ],
                preco: 169.90,
            }
        ]
    },
    {
        categoria: "Acessórios",
        produtos: [
            {
                id: 3,
                nome: "Brincos Teste 1",
                fotos: [
                    { foto: "/assets/roupas/brincos-teste-1.png" }
                ],
                preco: 99.90,
                cores: [
                    {
                        cor: "dourado",
                        tamanhos: [
                            { tamanho: "UNICO", quantidade: 15 }
                        ]
                    }
                ],
                lancamento: true,
            },
            {
                id: 87,
                nome: "Brincos Teste 2",
                fotos: [
                    { foto: "/assets/roupas/brincos-teste-2.png" }
                ],
                preco: 109.90,
            },
            {
                id: 88,
                nome: "Brincos Teste 3",
                fotos: [
                    { foto: "/assets/roupas/brincos-teste-3.png" }
                ],
                preco: 99.90,
            },
            {
                id: 89,
                nome: "Brincos Teste 4",
                fotos: [
                    { foto: "/assets/roupas/brincos-teste-4.png" }
                ],
                preco: 209.90,
                ofertas: [
                    { oferta: true, novoPreco: 159.90 }
                ]
            },
            {
                id: 90,
                nome: "Bolsa Teste 1",
                fotos: [
                    { foto: "/assets/roupas/bolsa-teste-1.png" }
                ],
                preco: 329.90,
            },
            {
                id: 91,
                nome: "Bolsa Teste 2",
                fotos: [
                    { foto: "/assets/roupas/bolsa-teste-2.png" }
                ],
                preco: 129.90,
            },
            {
                id: 92,
                nome: "Bolsa Teste 3",
                fotos: [
                    { foto: "/assets/roupas/bolsa-teste-3.png" }
                ],
                preco: 169.90,
            },
            {
                id: 93,
                nome: "Bolsa Teste 4",
                fotos: [
                    { foto: "/assets/roupas/bolsa-teste-4.png" }
                ],
                preco: 349.90,
            },
            {
                id: 94,
                nome: "Colar Teste 1",
                fotos: [
                    { foto: "/assets/roupas/colar-teste-1.png" }
                ],
                preco: 69.90,
            },
            {
                id: 95,
                nome: "Colar Teste 2",
                fotos: [
                    { foto: "/assets/roupas/colar-teste-2.png" }
                ],
                preco: 139.90,
            }
        ]
    },
]
export const todosProdutos = categoriasProdutos.flatMap(cat => cat.produtos);
export const lancamentos = todosProdutos.filter(p => p.lancamento);
export const ofertas = todosProdutos.filter(p => p.ofertas?.[0]?.oferta);

export function obterCategoriaSelecionada(categoriaURL) {
  if (categoriaURL === 'lancamentos') {
    return {
      categoria: 'Lançamentos',
      produtos: lancamentos,
    };
  }

  if (categoriaURL === 'ofertas') {
    return {
      categoria: 'Ofertas',
      produtos: ofertas,
    };
  }

  const encontrada = categoriasProdutos.find((cat) => urlFormat(cat.categoria) === categoriaURL);

  if (encontrada) {
    return {
      categoria: encontrada.categoria,
      produtos: encontrada.produtos,
    };
  }

  return null;
}
