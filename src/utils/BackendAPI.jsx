import axios from 'axios'

// const baseURL = 'http://localhost:8009'
const baseURL = 'https://phone-book-server.onrender.com'

const API = axios.create({
    baseURL,
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