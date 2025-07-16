import axios from "axios";

export const postCadastro = async (nome, email, pass, navigate, setError) => {
    const userData = {
        user_nome: nome,
        user_email: email,
        user_pass: pass
    };

    try {
        const resp = await axios.post('http://localhost:3000/ecommerce/cadastro', userData);
        if (resp.data.result) {
            navigate('/login');
        } else {
            setError('Erro no post cadastro');
        }
    } catch (err) {
        setError('Erro na requisição de cadastro:' + ' ' + err.message);
        throw new Error('Erro na requisição de cadastro: ' + err.message);
    }
};
