export async function fetchRegions() {
  return [];
}

export async function fetchCategories() {
  return [];
}

export async function fetchRestaurants() {
  return [];
}

export async function fetchRestaurant() {
  return {};
}

export async function postLoginForm({ email, password }) {
  return {
    email,
    password,
    accessToken: 'ACCESS_TOKEN',
  };
}

export async function postReviewForm({
  accessToken,
  restaurantId,
  score,
  description,
}) {
  return {
    accessToken,
    restaurantId,
    score,
    description,
    result: 'SUCCESS',
  };
}
