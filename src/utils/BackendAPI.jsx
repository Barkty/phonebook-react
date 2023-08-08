import axios from 'axios'
import { environment } from 'config/environment';

const { api: { uri } } = environment
// const baseURL = 'https://phone-book-server.onrender.com'
console.log('URI:: ', uri)

const API = axios.create({
  baseURL: uri,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

API.interceptors.request.use((request) => {
  
  return request;
});

API.interceptors.response.use((response) => {
    // console.log(response);
    return response;
})

export default API;