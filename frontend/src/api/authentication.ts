import httpClient from "../config/httpClient";
import { AuthRequestForm } from "../types/requests";
export const login = async (body: AuthRequestForm) => {
    try {
        const response = await httpClient.post('/auth/login', body)
        return response.data;
    } catch (e) {
        console.log(e)
    }
}

export const register = async (body: AuthRequestForm) => {
    try {
        const response = await httpClient.post('/auth/register', body)
        return response.data;
    } catch (e) {
        console.log(e)
    }
}