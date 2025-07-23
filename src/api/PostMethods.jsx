import axios from "axios";
import { toast } from "react-toastify";

export const postCadastro = async (nome, email, pass, navigate) => {
    const userData = {
        user_nome: nome,
        user_email: email,
        user_pass: pass
    };

    try {
        const resp = await axios.post('http://localhost:3000/ecommerce/cadastro', userData);
        if (!resp.data.error) {
            navigate('/login');
        } else {
            toast.error(resp.data.error);
        }
    } catch (error) {
        toast.error('Erro na requisição de cadastro:' + ' ' + error.message);
        throw new Error('Erro na requisição de cadastro: ' + error.message);
    }
}
export const postLogin = async (email, pass, navigate, login) => {
    const userData = {
        user_email: email,
        user_pass: pass
    };

    try {
        const resp = await axios.post('http://localhost:3000/ecommerce/login', userData);
        if (!resp.data.error) {
            login(resp.data.result);
            navigate('/minha-conta');
        } else {
            toast.error(resp.data.error || 'Erro ao logar');
        }
    } catch (error) {
        toast.error('Erro na requisição de login:' + ' ' + error.message);
        throw new Error('Erro na requisição de login: ' + error.message);
    }
}
export const postSignatureData = async () => {
    const folder = 'ecommerce_fotos';
    const timestamp = Math.floor(Date.now() / 1000);

    try {
        const signatureResp = await axios.post('http://localhost:3000/ecommerce/cloudinary-signature', { timestamp, folder });

        return { ...signatureResp.data, folder };
    } catch (error) {
        console.error('Erro ao obter assinatura do servidor', error);
        return null;
    }
};
export const postFileFotos = async (formData, uploadFotos) => {
    const resp = await axios.post('https://api.cloudinary.com/v1_1/dub80scyn/image/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    if (resp.data.secure_url) {
        uploadFotos.push({ foto: resp.data.secure_url });
    } else {
        console.error('Erro ao fazer upload da imagem', resp.data);
    }
}
export const postProduto = async (nome, preco, lancamento, categoria, foto, cor, setProduto, token) => {
    const produtoData = {
        produto_nome: nome,
        produto_preco: preco,
        produto_lancamento: lancamento,
        produto_categoria: categoria,
        produto_foto: foto,
        produto_cor: cor
    }

    try {
        const resp = await axios.post('http://localhost:3000/ecommerce/cad-produto', produtoData, { headers: { Authorization: `Bearer ${token}` } })
        if (!resp.data.error) {
            setProduto(resp.data.result);
            toast.success('Produto cadastrado com sucesso!');
        } else {
            toast.error(resp.data.error || 'Erro ao cadastrar produto');
        }
    } catch (error) {
        toast.error('Erro na requisição de cadastro do produto:' + ' ' + error.message);
        throw new Error('Erro na requisição de cadastro do produto: ' + error.message);
    }
}
export const postOfferProduto = async (id, novoPreco, token) => {
    const offerData = { oferta_ativo: true, oferta_novo_preco: novoPreco, produto_id: id }

    try {
        const resp = await axios.post(`http://localhost:3000/ecommerce/offer-produto/${id}`, offerData, { headers: { Authorization: `Bearer ${token}` } });
        if (!resp.data.error) {
            toast.success('Produto ofertado com sucesso!');
        } else {
            toast.error(resp.data.error);
        }
    } catch (error) {
        toast.error('Erro na requisição de ofertar o produto:' + ' ' + error.message);
        throw new Error('Erro na requisição de ofertar o produto: ' + error.message);
    }
}