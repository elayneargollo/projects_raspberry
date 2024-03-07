import axios from '../../Config/axios';

export const getSolenoides = () =>
{
    return axios
    .get(`/solenoides/`)
    .then(response => {
        return response;
    })
    .catch(error => {
        return error;
    });
}


export const getByIdSolenoides =  id =>
{
    return axios
    .get(`/solenoides/${id}`)
    .then(response => {
        return response;
    })
    .catch(error => {
        return error;
    });
}

export const postSolenoide = solenoide =>
{
    return axios
    .post(`/solenoides/`, solenoide)
    .then(response => {
        console.log(solenoide);
        return response;
    })
    .catch(error => {
        return error;
    });
}