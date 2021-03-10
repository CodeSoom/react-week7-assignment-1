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
  const url = `${baseUrl}?region=${regionName}&category=${categoryId}`;
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
  const url = `${baseUrl}/session`;
  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  };
  const response = await fetch(url, option);
  const data = await response.json();
  return data;
}

export async function postReviw({
  score, description, accessToken, restaurantId,
}) {
  const url = `${baseUrl}/restaurants/${restaurantId}/reviews`;

  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ score, description }),
  };

  const response = await fetch(url, option);

  return response.status;
}
