import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://eatgo-login-api.ahastudio.com',
});

export async function authorize(email, password) {
  try {
    const response = await request.post('/session', {
      email,
      password,
    });

    const { data } = await response;
    return data;
  } catch (error) {
    throw new Error('Invalid email or password');
  }
}
