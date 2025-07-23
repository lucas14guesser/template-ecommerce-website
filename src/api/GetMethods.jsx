import axios from "axios"

export const getAllProdutos = async (setProdutos) => {
    const resp = await axios.get('https://2712dbcabcd1.ngrok-free.app/ecommerce/produtos')
    if (!resp.data.error) {
        setProdutos(resp.data.result);
    } else {
        console.error(resp.data.error)
    }
}