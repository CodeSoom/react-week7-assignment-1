import axios from 'axios';

export const request = axios.create({
  baseURL: `${process.env.API_BASE_URL}/restaurants`,
});

export async function createReview(score, description, restaurantId, accessToken) {
  try {
    const response = await request.post(`/${restaurantId}/reviews`, {
      score,
      description,
    }, { headers: { Authorization: `Bearer ${accessToken}` } });

    return response;
  } catch (error) {
    throw new Error('Invalid email or password');
  }
}
