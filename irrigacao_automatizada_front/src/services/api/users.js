import axios from '../../Config/axios';

export const login = user =>
{
    return axios
    .post(`/login`, user)
    .then(response => {
        return response;
    })
    .catch(error => {
        return error;
    });
}

export const cadastroUsuario = user =>
{
    return axios
    .post(`/cadastro`, user)
    .then(response => {
        return response;
    })
    .catch(error => {
        return error;
    });
}