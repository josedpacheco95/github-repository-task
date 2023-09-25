import httpClient from "../config/httpClient";

export const getCommits = async () => {
    try {
        const response = await httpClient.get('/commits')
        return response.data;
    } catch (e) {
        console.log(e)
    }
}