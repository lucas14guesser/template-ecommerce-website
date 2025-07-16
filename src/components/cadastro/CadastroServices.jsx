import { postCadastro } from "../../api/PostMethods";

export const inputInfosCad = (nome, setNome, email, setEmail, pass, setPass) => [
    {
        tipo: 'text',
        placeholder: 'Nome Completo',
        nome: 'nome',
        valor: nome,
        change: setNome
    },
    {
        tipo: 'email',
        placeholder: 'E-mail',
        nome: 'email',
        valor: email,
        change: setEmail
    },
    {
        tipo: 'password',
        placeholder: 'Senha',
        nome: 'pass',
        valor: pass,
        change: setPass
    },
];

export const handleCadastro = async (nome, email, pass, setError, navigate, e) => {
    e.preventDefault();

    if (!nome || !email || !pass) {
        setError('Todos os campos precisam ser preenchidos');
    } else {
        await postCadastro(nome, email, pass, navigate, setError);
    }
};
