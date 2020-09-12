import AccessToken from '../../../fixtures/accessToken';

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
    // TODO: ...
  };
}

export async function postLogin({ email, password }) {
  return AccessToken;
}

export async function postReview({
  accessToken, restaurantId, email, password,
}) {
  return {
    accessToken,
    restaurantId,
    email,
    password,
    // TODO: ...
  };
}
