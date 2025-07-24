import axios from "axios"
import { toast } from "react-toastify"
import http from "./GlobalMethod";

export const deleteProduto = async (produto_id, token) => {
    try {
        const resp = await http.delete(`/del-produto/${produto_id}`, { headers: { Authorization: `Bearer ${token}` } });
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
export const retirarOferta = async (produto_id, token) => {
    try {
        const resp = await http.delete(`/ret-oferta/${produto_id}`, { headers: { Authorization: `Bearer ${token}` } });
        if (!resp.data.error) {
            toast.success(`Oferta do produto ${produto_id} retirada com sucesso!`);
        } else {
            toast.error(resp.data.error);
        }
    } catch (error) {
        toast.error('Erro ao retirar a oferta do produto:' + ' ' + error.message);
        throw new Error('Erro ao retirar a oferta do produto: ' + error.message);
    }
}
