import axios from 'axios';

const request = axios.create({
  baseURL: process.env.API_BASE_URL,
});

export async function fetchRestaurants({ regionName, categoryId }) {
  const { data } = await request.get(`/restaurants?region=${regionName}&category=${categoryId}`);
  return data;
}

export async function fetchRestaurantById(restaurantId) {
  const { data } = await request.get(`/restaurants/${restaurantId}`);
  return data;
}
