import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:4000" });

//login
export const login = (data) => {
    return API.post(`/api/login`, data);
}

//reg
export const register = (data) => {
    return API.post(`/api/register`, data);
}

//upload
export const upload = (data) => {
    return API.post(`/api/upload`, data)
}
