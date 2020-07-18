export async function fetchRegions() {
  return [];
}

export async function fetchCategories() {
  return [];
}

export async function fetchRestaurants() {
  return [];
}

export async function fetchRestaurant({ restaurantId }) {
  return {
    restaurantId,
  };
}

export async function postLogin({ email, password }) {
  return {
    email,
    password,
    accessToken: 'ACCESS_TOKEN',
  };
}

export async function postReview({
  accessToken, score, description, restaurantId,
}) {
  return {
    accessToken,
    score,
    description,
    restaurantId,
  };
}
