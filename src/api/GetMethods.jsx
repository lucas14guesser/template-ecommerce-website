import axios from "axios"
import http from "./GlobalMethod";

export const getAllProdutos = async (setProdutos) => {
    const resp = await http.get('/produtos')
    if (!resp.data.error) {
        setProdutos(resp.data.result);
    } else {
        console.error(resp.data.error);
    }
}
export const getProdutoById = async (produto_id, setProduto) => {
    const resp = await http.get(`/produto/${produto_id}`);
    if (!resp.data.error) {
        setProduto(resp.data.result);
    } else {
        console.error(resp.data.error);
    }
}
