import axios from 'axios';

const api = axios.create({
  baseURL: 'https://viamaq.vercel.app/api',
});

export default api;
