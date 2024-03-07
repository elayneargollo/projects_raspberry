import axios from '../../Config/axios';

export const getAmbientes = () =>
{
    return axios
    .get(`/ambientes/`)
    .then(response => {
        return response;
    })
    .catch(error => {
        return error;
    });
}