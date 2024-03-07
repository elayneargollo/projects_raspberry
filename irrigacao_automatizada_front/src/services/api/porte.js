import axios from '../../Config/axios';

export const getPortes = () =>
{
    return axios
    .get(`/portes/`)
    .then(response => {
        return response;
    })
    .catch(error => {
        return error;
    });
}