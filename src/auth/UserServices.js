import axios from "axios";


export function register(data) {
    return axios.post(`http://localhost:7000/api/users`, data);
}