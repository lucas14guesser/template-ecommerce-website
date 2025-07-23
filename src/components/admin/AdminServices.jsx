import FormCadastroProduto from "./FormCadastroProduto";
import FormEditarProduto from "./FormEditarProduto";
import FormExcluirProduto from "./FormExcluirProduto";
import { postFileFotos, postOfferProduto, postProduto, postSignatureData } from "../../api/PostMethods";
import FormOfertarProduto from "./FormOfertarProduto";
import { toast } from "react-toastify";
import { deleteProduto } from "../../api/DeleteMethods";

export const produtosField = [
    {
        nome: 'produto_nome',
        placeholder: 'Nome do Produto',
        tipo: 'text'
    },
    {
        nome: 'produto_preco',
        placeholder: 'Preço do Produto',
        tipo: 'text'
    },
    {
        nome: 'produto_lancamento',
        placeholder: 'O produto cadastrado é lançamento?',
        tipo: 'checkbox'
    },
    {
        nome: 'produto_foto',
        placeholder: 'Foto do Produto',
        tipo: 'file'
    },
]
export const produtosEdit = [
    {
        nome: 'id',
        placeholder: 'ID do Produto',
        tipo: 'text'
    },
    {
        nome: 'categoria',
        placeholder: 'Categoria do Produto',
        tipo: 'text'
    },
    {
        nome: 'nome',
        placeholder: 'Nome do Produto',
        tipo: 'text'
    },
    {
        nome: 'foto',
        placeholder: 'Foto do Produto',
        tipo: 'file'
    },
    {
        nome: 'preco',
        placeholder: 'Preço do Produto',
        tipo: 'text'
    },
    {
        nome: 'cor',
        placeholder: 'Cor do Produto',
        tipo: 'text'
    },
    {
        nome: 'tamanho',
        placeholder: 'Tamanho do Produto',
        tipo: 'text'
    },
    {
        nome: 'quantidade',
        placeholder: 'Quantidade do Produto',
        tipo: 'text'
    },
    {
        nome: 'lancamento',
        placeholder: 'É Lançamento?',
        tipo: 'checkbox'
    },
    {
        nome: 'oferta',
        placeholder: 'É Oferta?',
        tipo: 'checkbox'
    },
]
export const produtosRM = [
    {
        nome: 'id',
        placeholder: 'ID do Produto',
        tipo: 'text'
    },
]
export const produtosOffer = (id, setId, preco, setPreco) => {
    return [
        {
            nome: 'produto_id',
            placeholder: 'ID do Produto',
            tipo: 'text',
            valor: id,
            change: setId,
        },
        {
            nome: 'oferta_novo_preco',
            placeholder: 'Novo Preço do Produto',
            tipo: 'text',
            valor: preco,
            change: setPreco,
        },
    ]
}
export const listCor = [
    { nome: 'Branco', valor: '#FFFFFF' },
    { nome: 'Preto', valor: '#000000' },
    { nome: 'Cinza Claro', valor: '#D3D3D3' },
    { nome: 'Cinza Escuro', valor: '#4B4B4B' },
    { nome: 'Bege', valor: '#F5F5DC' },
    { nome: 'Marrom', valor: '#8B4513' },
    { nome: 'Azul Marinho', valor: '#000080' },
    { nome: 'Azul Claro', valor: '#ADD8E6' },
    { nome: 'Azul Jeans', valor: '#3B5998' },
    { nome: 'Verde Militar', valor: '#4B5320' },
    { nome: 'Verde Oliva', valor: '#808000' },
    { nome: 'Verde Menta', valor: '#98FF98' },
    { nome: 'Vermelho', valor: '#FF0000' },
    { nome: 'Vermelho Vinho', valor: '#800000' },
    { nome: 'Rosa Claro', valor: '#FFC0CB' },
    { nome: 'Rosa Choque', valor: '#FF69B4' },
    { nome: 'Roxo', valor: '#9370DB' },
    { nome: 'Amarelo', valor: '#FFFF00' },
    { nome: 'Amarelo Mostarda', valor: '#FFDB58' },
    { nome: 'Laranja', valor: '#FFA500' },
    { nome: 'Off White', valor: '#FAF9F6' },
    { nome: 'Caramelo', valor: '#A0522D' },
    { nome: 'Camelo', valor: '#C19A6B' },
    { nome: 'Bronze', valor: '#CD7F32' },
    { nome: 'Prata', valor: '#C0C0C0' },
    { nome: 'Ouro', valor: '#FFD700' },
]
export const listTamanho = [
    { nome: 'PP', valor: 'pp' },
    { nome: 'P', valor: 'P' },
    { nome: 'M', valor: 'M' },
    { nome: 'G', valor: 'G' },
    { nome: 'GG', valor: 'GG' },
    { nome: 'XG', valor: 'XG' },
    { nome: 'ÚNICO', valor: 'UNICO' },

    { nome: '33', valor: '33' },
    { nome: '34', valor: '34' },
    { nome: '35', valor: '35' },
    { nome: '36', valor: '36' },
    { nome: '37', valor: '37' },
    { nome: '38', valor: '38' },
    { nome: '39', valor: '39' },
    { nome: '40', valor: '40' },
    { nome: '41', valor: '41' },
    { nome: '42', valor: '42' },
    { nome: '43', valor: '43' },
    { nome: '44', valor: '44' }
];
export const handleOpenModal = (setModal, type, setType) => {
    setType(type);
    setModal(true);
}
export const handleCloseModal = (setModal, setType) => {
    setModal(false);
    setType(null);
}
export const functionModalContent = {
    cadastrar: <FormCadastroProduto />,
    editar: <FormEditarProduto />,
    excluir: <FormExcluirProduto />,
    ofertar: <FormOfertarProduto />,
}
export const btnFunctionList = [
    {
        tipo: 'cadastrar',
        txt: 'Cadastrar Produto'
    },
    {
        tipo: 'editar',
        txt: 'Editar Produto'
    },
    {
        tipo: 'excluir',
        txt: 'Excluir Produto'
    },
    {
        tipo: 'ofertar',
        txt: 'Ofertar Produto'
    },
]
export const handleChangeCor = (novasCores, setProduto) => {
    setProduto(prev => ({ ...prev, produto_cor: novasCores }));
}
export const adicionarCor = (cores, setCores) => {
    const novaCor = { cor: { nome: '', valor: '' }, tamanhos: [] };
    setCores([...cores, novaCor]);
}
export const adicionarTamanho = (cores, setCores, index) => {
    const novasCores = [...cores];
    novasCores[index].tamanhos.push({ tamanho: '', quantidade: '' });
    setCores(novasCores);
}
export const handleCorChange = (cores, setCores, index, value) => {
    const novasCores = [...cores];
    const normalizedValue = value.trim().toUpperCase();
    const corSelecionada = listCor.find(c => c.valor.toUpperCase() === normalizedValue);
    if (corSelecionada) {
        novasCores[index].cor = corSelecionada;
    } else {
        novasCores[index].cor = { nome: '', valor: '' };
    }
    setCores(novasCores);
}
export const handleTamanhoChange = (cores, setCores, corIndex, tamIndex, campo, valor) => {
    const novasCores = [...cores];
    novasCores[corIndex].tamanhos[tamIndex][campo] = valor;
    setCores(novasCores);
}
export const removerCor = (cores, setCores, index) => {
    const novasCores = [...cores];
    novasCores.splice(index, 1);
    setCores(novasCores);
}
export const removerTamanho = (cores, setCores, corIndex, tamIndex) => {
    const novasCores = [...cores];
    novasCores[corIndex].tamanhos.splice(tamIndex, 1);
    setCores(novasCores);
}
export const handleChangeFile = async (e, setProduto) => {
    const { name, type, checked, value, files } = e.target;

    if (type === 'file') {
        const uploadFotos = [];

        const signatureData = await postSignatureData();
        if (!signatureData) return;

        for (const file of files) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('api_key', signatureData.apiKey);
            formData.append('timestamp', signatureData.timestamp);
            formData.append('signature', signatureData.signature);
            formData.append('folder', signatureData.folder);
            formData.append('upload_preset', 'ecommerce_signed');

            try {
                await postFileFotos(formData, uploadFotos);
            } catch (error) {
                console.error('Erro ao enviar imagem ao Cloudinary', error);
            }
        }

        setProduto(prev => ({ ...prev, [name]: uploadFotos }));
    } else {
        setProduto(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    }
}
export const handleCadastroProduto = async (nome, preco, categoria, lancamento, foto, cor, e, setProduto, token) => {
    e.preventDefault();

    if (!nome || !preco || !categoria) {
        toast.error('Nome, preço e categoria são obrigatórios.');
        return
    }
    await postProduto(nome, preco, lancamento, categoria, foto, cor, setProduto, token);
}
export const filtroDeProdutos = (produtos, busca) => {
    if (!Array.isArray(produtos)) return [];
    if (!busca || typeof busca !== 'string') return produtos;

    const includes = removerAcentos(busca.toLowerCase());

    return produtos.filter(produto => {
        const id = removerAcentos(String(produto.produto_id).toLowerCase());
        const nome = removerAcentos(produto.produto_nome.toLowerCase());
        const categoria = removerAcentos(produto.categoria_nome.toLowerCase());

        return id.includes(includes) || nome.includes(includes) || categoria.includes(includes);
    });
}
const removerAcentos = (txt) => {
    return txt.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
export const functionPaginacao = (paginaAtual, produtosFiltrados) => {
    const produtosPorPagina = 4;

    const indiceInicial = (paginaAtual - 1) * produtosPorPagina;
    const indiceFinal = indiceInicial + produtosPorPagina;
    const produtosPaginados = produtosFiltrados.slice(indiceInicial, indiceFinal);
    const totalPaginas = Math.ceil(produtosFiltrados.length / produtosPorPagina);

    return { produtosPaginados, totalPaginas }
}
export const handleExcluirProduto = async (e, produto_id, token) => {
    e.preventDefault();

    if (!produto_id) {
        toast.error('ID do produto precisa ser preenchido');
        return;
    }

    await deleteProduto(produto_id, token);
}
export const handleOfferProduto = async (e, produto_id, oferta_novo_preco, token) => {
    e.preventDefault()

    if(!produto_id || !oferta_novo_preco) {
        toast.error('Todos os campos precisam ser preenchidos');
        return;
    }

    await postOfferProduto(produto_id, oferta_novo_preco, token);
}