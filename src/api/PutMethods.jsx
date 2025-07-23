import axios from "axios"
import { toast } from "react-toastify";

export const PutUserData = async (nomeUser, enderecoUser, telefoneUser, cpfUser, user_id, token) => {
    const userData = {
        user_nome: nomeUser,
        user_endereco: enderecoUser,
        user_telefone: telefoneUser,
        user_cpf: cpfUser,
    }

    try {
        const resp = await axios.put(`https://87fe00a49264.ngrok-free.app/ecommerce/user/${user_id}`, userData, {headers: {Authorization: `Bearer ${token}`}});
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