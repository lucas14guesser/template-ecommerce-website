import axios from "axios"

export const getAllProdutos = async (setProdutos) => {
    const resp = await axios.get('https://87fe00a49264.ngrok-free.app/ecommerce/produtos')
    if (!resp.data.error) {
        setProdutos(resp.data.result);
    } else {
        console.error(resp.data.error)
    }
}