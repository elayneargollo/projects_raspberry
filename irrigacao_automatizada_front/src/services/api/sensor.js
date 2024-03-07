import axios from '../../Config/axios';

export const getSensores = () =>
{
    return axios
    .get(`/sensores/`)
    .then(response => {
        return response;
    })
    .catch(error => {
        return error;
    });
}

export const getByIdSensores = id =>
{
    return axios
    .get(`/sensores/${id}`)
    .then(response => {
        return response;
    })
    .catch(error => {
        return error;
    });
}

export const postSensor = sensor =>
{
    return axios
    .post(`/sensores/`, sensor)
    .then(response => {
        console.log(sensor);
        return response;
    })
    .catch(error => {
        return error;
    });
}