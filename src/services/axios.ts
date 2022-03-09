import axios from 'axios';

//this calls the api route
const api = axios.create({
  baseURL: 'https://localhost:3000/api',
});

export default api;
