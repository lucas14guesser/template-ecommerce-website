import FormCadastroProduto from "./FormCadastroProduto";
import FormEditarProduto from "./FormEditarProduto";
import FormExcluirProduto from "./FormExcluirProduto";

export const produtosField = [
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
};