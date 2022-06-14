const origin = 'https://eatgo-customer-api.ahastudio.com';

export async function fetchRegions() {
  const url = `${origin}/regions`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchCategories() {
  const url = `${origin}/categories`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchRestaurants({ regionName, categoryId }) {
  const url = `${origin}/restaurants
    ?region=${regionName}&category=${categoryId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchRestaurantById(restaurantId) {
  const url = `${origin}/${restaurantId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function authorize(email, password) {
  const url = 'https://eatgo-login-api.ahastudio.com/session';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  return data;
}
