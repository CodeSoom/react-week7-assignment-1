const BASE_URL = 'https://eatgo-customer-api.ahastudio.com';

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchRegions() {
  const url = `${BASE_URL}/regions`;
  return fetchData(url);
}

export async function fetchCategories() {
  const url = `${BASE_URL}/categories`;
  return fetchData(url);
}

export async function fetchRestaurants({ regionName, categoryId }) {
  const url = `${BASE_URL}/restaurants?region=${regionName}&category=${categoryId}`;
  return fetchData(url);
}

export async function fetchRestaurant({ restaurantId }) {
  const url = `${BASE_URL}/restaurants/${restaurantId}`;
  return fetchData(url);
}

export async function postLogin({ email, password }) {
  const url = 'https://eatgo-login-api.ahastudio.com/session';
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
  const url = `${BASE_URL}/restaurants/${restaurantId}/reviews`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ score, description }),
  });
  await response.json();
}
