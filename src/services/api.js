const baseUrl = 'https://eatgo-customer-api.ahastudio.com';

export async function fetchRegions() {
  const url = `${baseUrl}/regions`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchCategories() {
  const url = `${baseUrl}/categories`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchRestaurants({ regionName, categoryId }) {
  const url = `${baseUrl}/restaurants?region=${regionName}&category=${categoryId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchRestaurant({ restaurantId }) {
  const url = `${baseUrl}/restaurants/${restaurantId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function postLogin({ email, password }) {
  const url = '/login-api/session';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const { accessToken } = await response.json();
  return accessToken;
}

export async function postReview({
  accessToken,
  restaurantId,
  score,
  description,
}) {
  const url = `${baseUrl}/${restaurantId}/reviews`;
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ score, description }),
  });
}
