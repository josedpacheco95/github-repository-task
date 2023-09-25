import httpClient from "../config/httpClient";

export const getRepository = async () => {
    try {
        const response = await httpClient.get('/repositorie')
        return response.data;
    } catch (e) {
        console.log(e)
    }
}