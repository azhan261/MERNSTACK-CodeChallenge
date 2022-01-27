import axios from "axios";
import jwtDecode from "jwt-decode";


export function login(data) {
    return axios.post(`http://localhost:7000/api/auth`, data);
}

export function getCurrentUser() {
    try {
        const token = localStorage.getItem("token");
        console.log(jwtDecode(token))
        return jwtDecode(token);
    } catch (error) {
        return null;
    }
}
export const getUserDetails = id => (
	console.log(id),
	axios.post(`http://localhost:7000/api/auth/details/${id}`)
		.then(res => res.data, )
)

export function logout() {
    localStorage.removeItem("token");
}

