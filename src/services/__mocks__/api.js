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

export async function postLogin({ email, password }) {
  return {
    email,
    password,
  };
}

export async function postReview({
  restaurantId, accessToken, rating, description,
}) {
  return {
    restaurantId,
    accessToken,
    rating,
    description,
  };
}
