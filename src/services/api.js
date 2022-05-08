import axios from 'axios';

export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchRestaurants({ regionName, categoryId }) {
  const url = 'https://eatgo-customer-api.ahastudio.com/restaurants'
    + `?region=${regionName}&category=${categoryId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchRestaurant({ restaurantId }) {
  const url = 'https://eatgo-customer-api.ahastudio.com'
    + `/restaurants/${restaurantId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function postLogin({ email, password }) {
  const url = 'https://eatgo-login-api.ahastudio.com/session';
  try {
    const response = await axios({
      method: 'post',
      url,
      data: {
        email,
        password,
      },
    });
    const { accessToken } = await response.data;
    return accessToken;
  } catch (e) {
    return '';
  }
}

export async function postReview({
  accessToken, restaurantId, score, description,
}) {
  const url = 'https://eatgo-customer-api.ahastudio.com'
  + `/restaurants/${restaurantId}/reviews`;
  const Authorization = `Bearer ${accessToken}`;
  try {
    const response = await axios({
      method: 'post',
      headers: {
        Authorization,
      },
      url,
      data: {
        score,
        description,
      },
    });
    return response.data;
  } catch (e) {
    return '';
  }
}
