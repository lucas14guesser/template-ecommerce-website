import axios from "axios"
import { toast } from "react-toastify";
import http from "./GlobalMethod";

export const PutUserData = async (nomeUser, enderecoUser, telefoneUser, cpfUser, user_id, token) => {
    const userData = {
        user_nome: nomeUser,
        user_endereco: enderecoUser,
        user_telefone: telefoneUser,
        user_cpf: cpfUser,
    }

    try {
        const resp = await http.put(`/user/${user_id}`, userData, { headers: { Authorization: `Bearer ${token}` } });
        if (!resp.data.error) {
            toast.success('Seus dados foram atualizados com sucesso!');
        } else {
            toast.error(resp.data.error);
        }
    } catch (error) {
        toast.error('Erro na requisição de editção:' + ' ' + error.message);
        throw new Error('Erro na requisição de edição: ' + error.message);
    }
}
export const putProduto = async (id, nome, preco, lancamento, categoria, foto, cor, setProduto, token) => {
    const produtoData = {
        produto_nome: nome,
        produto_preco: preco,
        produto_lancamento: lancamento,
        produto_categoria: categoria,
        produto_foto: foto,
        produto_cor: cor
    };

    try {
        const resp = await http.put(`/edit-produto/${id}`, produtoData, {
            headers: { Authorization: `Bearer ${token}` }
        });

        if (!resp.data.error) {
            setProduto({ produto_id: resp.data.result?.produto_id ?? '', produto_nome: resp.data.result?.produto_nome ?? '', produto_preco: resp.data.result?.produto_preco ?? '', produto_lancamento: resp.data.result?.produto_lancamento ?? false, produto_categoria: resp.data.result?.produto_categoria ?? '', produto_foto: resp.data.result?.produto_foto || [], produto_cor: resp.data.result?.produto_cor || [] });
            toast.success('Produto atualizado com sucesso!');
        } else {
            toast.error(resp.data.error || 'Erro ao atualizar produto');
        }
    } catch (error) {
        toast.error('Erro na requisição de atualização do produto: ' + error.message);
        throw new Error('Erro na requisição de atualização do produto: ' + error.message);
    }
};
