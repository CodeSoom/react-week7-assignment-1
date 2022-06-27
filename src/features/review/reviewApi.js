import axios from 'axios';

export const request = axios.create({
  baseURL: `${process.env.API_BASE_URL}/restaurants`,
});

export async function createReview(score, description, restaurantId, accessToken) {
  const response = await request.post(`/${restaurantId}/reviews`, {
    score,
    description,
  }, { headers: { Authorization: `Bearer ${accessToken}` } });

  return response;
}
