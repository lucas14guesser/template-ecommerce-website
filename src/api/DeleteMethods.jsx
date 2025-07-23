import axios from "axios"
import { toast } from "react-toastify"

export const deleteProduto = async (produto_id, token) => {
    try {
        const resp = await axios.delete(`http://localhost:3000/ecommerce/del-produto/${produto_id}`, { headers: { Authorization: `Bearer ${token}` } });
        if (!resp.data.error) {
            toast.success(`Produto ${produto_id} excluído com sucesso!`);
        } else {
            toast.error(resp.data.error);
        }
    } catch (error) {
        toast.error('Erro na exclusão do produto:' + ' ' + error.message);
        throw new Error('Erro na exclusão do produto: ' + error.message);
    }

}