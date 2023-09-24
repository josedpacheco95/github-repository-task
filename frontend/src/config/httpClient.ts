import axios from 'axios'
import config from '../config';

export const httpClient = axios.create({
    baseURL: config.baseApi
})

httpClient.interceptors.request.use(
    config => {
      const token = localStorage.getItem("token");
  
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      
      return config;
    },
  
    error => Promise.reject(error)
  );

export default httpClient;