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
    id: restaurantId,
    reviews: [],
  };
}

export async function postLogin() {
  return 'ACCESSTOKEN';
}

export async function postReview({
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
  };
}
