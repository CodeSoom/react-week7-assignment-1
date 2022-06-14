import { request, loginRequest } from './request';

export async function fetchRegions() {
  const { data } = await request.get('/regions');
  return data;
}

export async function fetchCategories() {
  const { data } = await request.get('/categories');
  return data;
}

export async function fetchRestaurants({ regionName, categoryId }) {
  const { data } = await request.get(`/restaurants?region=${regionName}&category=${categoryId}`);
  return data;
}

export async function fetchRestaurantById(restaurantId) {
  const { data } = await request.get(`/restaurants/${restaurantId}`);
  return data;
}

export async function authorize(email, password) {
  const response = await loginRequest(email, password);
  if (response.status === 201) {
    const { data } = await response;
    return data;
  }
  throw new Error('Invalid email or password');
}
