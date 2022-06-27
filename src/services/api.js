async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchRegions() {
  const url = `${process.env.CUSTOMER_API_SERVER}/regions`;
  return fetchData(url);
}

export async function fetchCategories() {
  const url = `${process.env.CUSTOMER_API_SERVER}/categories`;
  return fetchData(url);
}

export async function fetchRestaurants({ regionName, categoryId }) {
  const url = `${process.env.CUSTOMER_API_SERVER}/restaurants?region=${regionName}&category=${categoryId}`;
  return fetchData(url);
}

export async function fetchRestaurant({ restaurantId }) {
  const url = `${process.env.CUSTOMER_API_SERVER}/restaurants/${restaurantId}`;
  return fetchData(url);
}

export async function postLogin({ email, password }) {
  const url = `${process.env.AUTH_API_SERVER}/session`;
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
  const url = `${process.env.CUSTOMER_API_SERVER}/restaurants/${restaurantId}/reviews`;

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
