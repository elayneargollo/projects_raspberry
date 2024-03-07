import axios from '../../Config/axios';

export const getSolos = () =>
{
    return axios
    .get(`/solos/`)
    .then(response => {
        return response;
    })
    .catch(error => {
        return error;
    });
}