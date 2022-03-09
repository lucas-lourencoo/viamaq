import axios from 'axios';

//this calls the api route
const api = axios.create({
  baseURL: 'https://viamaq.vercel.app/api',
});

export default api;
