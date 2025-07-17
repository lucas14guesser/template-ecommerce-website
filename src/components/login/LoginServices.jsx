import { toast } from "react-toastify";
import { postLogin } from "../../api/PostMethods";

export const inputInfos = (email, setEmail, pass, setPass) => [
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
]

export const handleLogin = async (email, pass, navigate, login, e) => {
    e.preventDefault();

    if (!email || !pass) {
        toast.error('Todos os campos precisam ser preenchidos');
    } else {
        await postLogin(email, pass, navigate, login);
    }
}
export const handleLogout = (info, isLogout, logout, navigate) => {
    if (info.isLogout) {
        logout();
        navigate('/login');
    } else {
        navigate(info.link);
    }
};
