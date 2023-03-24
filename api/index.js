import axios from "axios";

const BASE_URL = "http://localhost:8000/api/todos";
// const BASE_URL = `http://${Your_IP_Address}:8000/api/todos`; // If you are using an external device

const API = axios.create({ baseURL: BASE_URL });

export const _get = () => API.get(`/`);
export const _create = (todo) => API.post(`/`, todo);
export const _update = (id, status) => API.put(`/${id}`, status);
export const _delete = (id) => API.delete(`/${id}`);
