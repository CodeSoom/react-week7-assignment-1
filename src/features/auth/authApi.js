import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://eatgo-login-api.ahastudio.com',
});

export async function authorize(email, password) {
  const response = await request.post('/session', {
    email,
    password,
  });

  const { data } = await response;
  return data;
}
