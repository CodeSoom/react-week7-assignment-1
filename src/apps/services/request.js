import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://eatgo-customer-api.ahastudio.com',
});

export const loginRequest = (email, password) => axios.create({
  baseURL: 'https://eatgo-login-api.ahastudio.com',
}).post('/session', {
  email,
  password,
});

request.interceptors.request.use((config) => config, (error) => Promise.reject(error));

request.interceptors.response.use((response) => response, (error) => Promise.reject(error));
