import axios from "axios"

export const getAllProdutos = async (setProdutos) => {
    const resp = await axios.get('http://localhost:3000/ecommerce/produtos')
    if (!resp.data.error) {
        setProdutos(resp.data.result);
    } else {
        console.error(resp.data.error)
    }
}