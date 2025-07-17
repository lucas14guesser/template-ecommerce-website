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
};
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
