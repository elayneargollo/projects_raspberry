import axios from 'axios';

const baseURL = 'http://127.0.0.1:5000/';

const api = axios.create({
    baseURL: baseURL,
    headers: { 'Content-Type': 'application/json', 'Accept': '*/*' },    
});

api.interceptors.request.use(async config => {
    const token = localStorage.getItem('token');
    
    if (token) {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }
    return config;
  });

export default api;