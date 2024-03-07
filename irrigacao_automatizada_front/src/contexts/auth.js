import React, { createContext, useState, useEffect } from 'react';
import axios from '../Config/axios';
import { login } from '../services/api/users';
import swal from 'sweetalert';

export const getToken = () => localStorage.getItem('token');
const Context = createContext();

function AuthProvider({ children }) {

    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            axios.defaults.headers.Authorization = `Token ${JSON.parse(token)}`;
            setAuthenticated(true);
        }
    }, []);


    async function handleLogin(email, password) {

        try {
            let credentials = { email, password };

            const { data: { access_token, user_id } } = await login(credentials)
  
            localStorage?.setItem('token', JSON.stringify(access_token))
            localStorage?.setItem('id', user_id)
            axios.defaults.headers.Authorization = `Token ${access_token}`;

            setAuthenticated(true);

        } catch (error) {
            swal("Ocorreu um erro", `${error.response.data.message}`, "error");
            return;
        }

    }

    return (
        <Context.Provider value={{ authenticated, handleLogin }}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider };