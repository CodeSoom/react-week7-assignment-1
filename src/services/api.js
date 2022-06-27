const ENV_TYPE = process.env.NODE_ENV || 'development';

const BASE_URL = {
  development: {
    customer: 'https://eatgo-customer-api.ahastudio.com',
    login: 'https://eatgo-login-api.ahastudio.com',
  },
  production: {
    customer: 'https://eatgo-customer-api.ahastudio.com',
    login: 'https://eatgo-login-api.ahastudio.com',
  },
};

export async function fetchRegions() {
  const url = `${BASE_URL[ENV_TYPE].customer}/regions`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchCategories() {
  const url = `${BASE_URL[ENV_TYPE].customer}/categories`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchRestaurants({ regionName, categoryId }) {
  const url = `${BASE_URL[ENV_TYPE].customer}/restaurants?region=${regionName}&category=${categoryId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchRestaurant({ restaurantId }) {
  const url = `${BASE_URL[ENV_TYPE].customer}/restaurants/${restaurantId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function postLogin({ email, password }) {
  const url = `${BASE_URL[ENV_TYPE].login}/session`;
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
